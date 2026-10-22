import { reactive, ref, computed, watch } from 'vue'
import {
  collection, doc, onSnapshot, setDoc, updateDoc, deleteDoc, writeBatch
} from 'firebase/firestore'
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { configured, db, auth } from './firebase'
import { exampleDocs } from './examples'
import { buildBoard, parseTime, parseKg } from './fringe'

const HUES = [12, 38, 160, 205, 265, 330, 95, 50]
const uid = (p) => p + Math.random().toString(36).slice(2, 9)
const byOrder = (a, b) => (a.order || 0) - (b.order || 0)

// ---- shared state -------------------------------------------------------
export const meta = reactive({ name: 'Tug of War Scoreboard', winPts: 2, bestOf: 3 })
const state = reactive({ categories: {}, teams: {}, matches: {}, sled: {}, grip: {} })

// ---- which event tab is open ------------------------------------------------
export const GAMES = [
  { id: 'tow', label: 'Tug of War' },
  { id: 'sled', label: 'Sled Pull / Push' },
  { id: 'grip', label: 'Handgrip' }
]
function savedGame() {
  try {
    const g = localStorage.getItem('tow-game')
    return GAMES.some((x) => x.id === g) ? g : 'tow'
  } catch (e) { return 'tow' }
}
export const game = ref(savedGame())
export function pickGame(g) {
  game.value = g
  try { localStorage.setItem('tow-game', g) } catch (e) { /* storage unavailable */ }
}
export const sledMode = ref('pull')

export const synced = ref(false)
export const loading = ref(configured)
export const user = ref(null)
export const authReady = ref(!configured)
export const showOrg = ref(false)
export const msg = ref('')
export const pend = ref('')
export const clock = ref('')
export const catId = ref('')
export const moves = ref({})

// In demo mode (no Firebase config) everyone can edit, locally only.
// With Firebase, controls show once signed in; the security rules decide who may really write.
export const admin = computed(() => (configured ? !!user.value : true))
export { configured }

let toastTimer, pendTimer, moveTimer
export function toast(text) {
  msg.value = text
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { msg.value = '' }, 4500)
}
function stamp() {
  clock.value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

// ---- live connection ------------------------------------------------------
const loaded = { meta: false, categories: false, teams: false, matches: false, sled: false, grip: false }
function markLoaded(k) {
  loaded[k] = true
  stamp()
  if (Object.values(loaded).every(Boolean)) loading.value = false
}
function onErr() {
  synced.value = false
  toast('Live updates stopped. Check your connection and reload.')
}

if (configured) {
  synced.value = true
  onAuthStateChanged(auth, (u) => { user.value = u; authReady.value = true })
  onSnapshot(doc(db, 'meta', 'event'), (s) => {
    if (s.exists()) {
      const v = s.data()
      if (v.name) meta.name = v.name
      if (v.winPts) meta.winPts = v.winPts
      if (v.bestOf) meta.bestOf = v.bestOf
    }
    markLoaded('meta')
  }, onErr)
  ;['categories', 'teams', 'matches', 'sled', 'grip'].forEach((name) => {
    onSnapshot(collection(db, name), (snap) => {
      const m = {}
      snap.forEach((d) => { m[d.id] = { ...d.data(), id: d.id } })
      state[name] = m
      markLoaded(name)
    }, onErr)
  })
  setTimeout(() => { loading.value = false }, 8000)
}

export async function signIn() {
  try { await signInWithPopup(auth, new GoogleAuthProvider()) }
  catch (e) { if (e.code !== 'auth/popup-closed-by-user') toast('Sign-in did not complete. Try again.') }
}
export async function signOutUser() { showOrg.value = false; await signOut(auth) }

// ---- writes (Firestore, or in-memory in demo mode) ---------------------------
async function put(c, id, data) {
  if (db) await setDoc(doc(db, c, id), data)
  else state[c] = { ...state[c], [id]: { ...data, id } }
}
async function patch(c, id, data) {
  if (db) await updateDoc(doc(db, c, id), data)
  else if (state[c][id]) state[c] = { ...state[c], [id]: { ...state[c][id], ...data } }
}
async function del(c, id) {
  if (db) await deleteDoc(doc(db, c, id))
  else { const n = { ...state[c] }; delete n[id]; state[c] = n }
}
async function run(fn) {
  try { await fn() }
  catch (e) {
    if (e && e.code === 'permission-denied') toast('This account is not on the organizer list.')
    else toast('That did not save. Try again.')
  }
}
function ask(key, fn) {
  if (pend.value === key) { pend.value = ''; fn(); return }
  pend.value = key
  clearTimeout(pendTimer)
  pendTimer = setTimeout(() => { pend.value = '' }, 4000)
}

// ---- derived data -------------------------------------------------------------
export const cats = computed(() => Object.values(state.categories).sort(byOrder))
watch(cats, (list) => {
  if (list.some((c) => c.id === catId.value)) return
  let saved = ''
  try { saved = localStorage.getItem('tow-cat') || '' } catch (e) { /* storage unavailable */ }
  const hit = list.find((c) => c.id === saved) || list[0]
  catId.value = hit ? hit.id : ''
}, { immediate: true })
export function pick(id) {
  catId.value = id
  try { localStorage.setItem('tow-cat', id) } catch (e) { /* storage unavailable */ }
}

export const catLabel = computed(() => (state.categories[catId.value] || {}).label || '')
const teamsAll = computed(() => Object.values(state.teams))
const matchesAll = computed(() => Object.values(state.matches))
export const catTeams = computed(() =>
  teamsAll.value.filter((t) => t.cat === catId.value).sort((a, b) => a.name.localeCompare(b.name)))
export const need = computed(() => Math.ceil((meta.bestOf || 3) / 2))
export const liveCount = computed(() => matchesAll.value.filter((m) => m.status === 'live').length)
export const hasExamples = computed(() =>
  teamsAll.value.some((t) => t.example)
  || Object.values(state.sled).some((a) => a.example)
  || Object.values(state.grip).some((a) => a.example))

export function endsOf(m) {
  const e = m.ends || []
  return { a: e.filter((x) => x === 'a').length, b: e.filter((x) => x === 'b').length }
}

function standingsFor(cid) {
  const win = Number(meta.winPts) || 2
  const rows = new Map(teamsAll.value.filter((t) => t.cat === cid).map((t) => [
    t.id, { team: t, p: 0, w: 0, l: 0, ew: 0, el: 0, pts: 0, diff: 0, rank: 0 }
  ]))
  matchesAll.value.forEach((m) => {
    if (m.cat !== cid || m.status !== 'final') return
    const A = rows.get(m.a), B = rows.get(m.b)
    if (!A || !B) return
    const e = endsOf(m)
    A.p++; B.p++
    A.ew += e.a; A.el += e.b; B.ew += e.b; B.el += e.a
    if (e.a > e.b) { A.w++; B.l++; A.pts += win }
    else if (e.b > e.a) { B.w++; A.l++; B.pts += win }
  })
  const list = Array.from(rows.values())
  list.forEach((r) => { r.diff = r.ew - r.el })
  const played = list.filter((r) => r.p > 0).sort((x, y) =>
    y.pts - x.pts || y.diff - x.diff || y.ew - x.ew || x.team.name.localeCompare(y.team.name))
  played.forEach((r, i) => {
    const p = played[i - 1]
    r.rank = p && p.pts === r.pts && p.diff === r.diff && p.ew === r.ew ? p.rank : i + 1
  })
  const rest = list.filter((r) => r.p === 0).sort((x, y) => x.team.name.localeCompare(y.team.name))
  return played.concat(rest)
}
export const rows = computed(() => standingsFor(catId.value))

// Rank movement badges: compare each team's rank before and after a change.
const allRanks = computed(() => {
  const r = {}
  cats.value.forEach((c) => standingsFor(c.id).forEach((x) => { if (x.rank) r[x.team.id] = x.rank }))
  const sled = Object.values(state.sled)
  ;['pull', 'push'].forEach((m) =>
    buildBoard(sled, 'sled', m).forEach((x) => { r['sled:' + m + ':' + x.key] = x.rank }))
  buildBoard(Object.values(state.grip), 'grip').forEach((x) => { r['grip:' + x.key] = x.rank })
  return r
})
watch(allRanks, (n, o) => {
  const mv = {}
  Object.keys(n).forEach((id) => { if (o[id] && o[id] !== n[id]) mv[id] = o[id] - n[id] })
  if (Object.keys(mv).length) {
    moves.value = mv
    clearTimeout(moveTimer)
    moveTimer = setTimeout(() => { moves.value = {} }, 12000)
  }
})

export const catMatches = computed(() => matchesAll.value.filter((m) => m.cat === catId.value))
export const groups = computed(() => {
  const by = (s) => catMatches.value.filter((m) => m.status === s)
  return [
    { key: 'live', title: 'On the rope', items: by('live').sort(byOrder) },
    { key: 'next', title: 'Up next', items: by('scheduled').sort(byOrder) },
    { key: 'done', title: 'Results', items: by('final').sort((a, b) => (b.order || 0) - (a.order || 0)) }
  ]
})

export const tname = (id) => (state.teams[id] || {}).name || 'Unknown team'
export const hue = (id) => { const t = state.teams[id]; return t ? t.hue : 0 }
export function winner(m) {
  if (m.status !== 'final') return ''
  const e = endsOf(m)
  return e.a > e.b ? 'a' : 'b'
}
export const statusLabel = (s) => (s === 'live' ? 'Live' : s === 'final' ? 'Final' : 'Up next')
export function flagPos(m) {
  const e = endsOf(m)
  return Math.max(12, Math.min(88, 50 - ((e.a - e.b) / need.value) * 38))
}

// ---- organizer actions ----------------------------------------------------------
export const startMatch = (m) => run(() => patch('matches', m.id, { status: 'live' }))
export const addEnd = (m, side) => run(() => {
  const list = (m.ends || []).concat(side)
  const e = endsOf({ ends: list })
  const done = e.a >= need.value || e.b >= need.value
  return patch('matches', m.id, { ends: list, status: done ? 'final' : 'live' })
})
export const undoEnd = (m) => run(() => {
  const list = (m.ends || []).slice(0, -1)
  return patch('matches', m.id, { ends: list, status: list.length ? 'live' : 'scheduled' })
})
export const removeMatch = (m) => ask('m' + m.id, () => run(() => del('matches', m.id)))
export const removeTeam = (t) => ask('t' + t.id, () => run(async () => {
  const ms = matchesAll.value.filter((x) => x.a === t.id || x.b === t.id)
  for (const m of ms) await del('matches', m.id)
  await del('teams', t.id)
}))
export const clearExamples = () => ask('xall', () => run(async () => {
  for (const m of matchesAll.value.filter((x) => x.example)) await del('matches', m.id)
  for (const t of teamsAll.value.filter((x) => x.example)) await del('teams', t.id)
  for (const c of cats.value.filter((x) => x.example)) await del('categories', c.id)
  for (const a of Object.values(state.sled).filter((x) => x.example)) await del('sled', a.id)
  for (const a of Object.values(state.grip).filter((x) => x.example)) await del('grip', a.id)
  toast('Examples cleared.')
}))

export async function addCategory(label) {
  label = label.trim()
  if (!label) return false
  const id = uid('c')
  let ok = true
  await run(async () => { try { await put('categories', id, { label, order: Date.now() }) } catch (e) { ok = false; throw e } })
  if (ok) pick(id)
  return ok
}
export async function addTeam(name) {
  name = name.trim()
  if (!name || !catId.value) return false
  if (catTeams.value.some((t) => t.name.toLowerCase() === name.toLowerCase())) {
    toast('That team is already in this class.')
    return false
  }
  let ok = true
  await run(async () => {
    try { await put('teams', uid('t'), { name, cat: catId.value, hue: HUES[teamsAll.value.length % HUES.length] }) }
    catch (e) { ok = false; throw e }
  })
  return ok
}
export async function addMatch({ a, b, round, lane }) {
  if (!a || !b) { toast('Choose both teams.'); return false }
  if (a === b) { toast('A team cannot pull against itself.'); return false }
  let ok = true
  await run(async () => {
    try {
      await put('matches', uid('m'), { cat: catId.value, a, b, round, lane, ends: [], status: 'scheduled', order: Date.now() })
    } catch (e) { ok = false; throw e }
  })
  if (ok) toast('Match added.')
  return ok
}
export const saveMeta = (ch) => run(async () => {
  const next = { name: meta.name, winPts: meta.winPts, bestOf: meta.bestOf, ...ch }
  if (db) await setDoc(doc(db, 'meta', 'event'), next)
  else Object.assign(meta, next)
})
export const loadExamples = () => run(async () => {
  const docs = exampleDocs()
  if (db) {
    const batch = writeBatch(db)
    docs.forEach(([c, id, data]) => batch.set(doc(db, c, id), data))
    await batch.commit()
  } else {
    docs.forEach(([c, id, data]) => { state[c] = { ...state[c], [id]: { ...data, id } } })
  }
  toast('Example data loaded.')
})

// ---- fringe games: sled pull/push and handgrip -------------------------------------
export const isFringe = computed(() => game.value !== 'tow')

// The attempts shown on the open tab (sled is split into pull and push).
const fringeAttempts = computed(() => {
  const g = game.value
  if (g === 'tow') return []
  return Object.values(state[g]).filter((a) => g === 'grip' || a.mode === sledMode.value)
})
export const fringeRows = computed(() =>
  game.value === 'tow' ? [] : buildBoard(fringeAttempts.value, game.value, sledMode.value))
export const fringeLog = computed(() =>
  fringeAttempts.value.slice().sort((a, b) => (b.at || 0) - (a.at || 0)))
export const bestKeys = computed(() => {
  const m = new Map(fringeRows.value.map((r) => [r.key, r.value]))
  const g = game.value
  return new Set(fringeLog.value
    .filter((a) => m.get(String(a.name).trim().toLowerCase()) === (g === 'sled' ? a.ms : a.kg))
    .map((a) => a.id))
})
export const athleteNames = computed(() => {
  if (game.value === 'tow') return []
  const seen = new Map()
  Object.values(state[game.value]).forEach((a) => {
    const k = String(a.name).trim().toLowerCase()
    if (!seen.has(k)) seen.set(k, a.name)
  })
  return Array.from(seen.values()).sort((a, b) => a.localeCompare(b))
})
// Key that the rank-movement badges use for a leaderboard row.
export const moveKey = (row) =>
  (game.value === 'sled' ? 'sled:' + sledMode.value + ':' : 'grip:') + row.key

export async function addAttempt({ name, raw }) {
  const g = game.value
  if (g === 'tow') return false
  name = name.trim()
  if (!name) { toast('Enter the athlete or team name.'); return false }
  const same = athleteNames.value.find((n) => n.toLowerCase() === name.toLowerCase())
  if (same) name = same
  let data
  if (g === 'sled') {
    const ms = parseTime(raw)
    if (ms === null) { toast('Enter a time like 12.34 or 1:05.20.'); return false }
    data = { name, mode: sledMode.value, ms, at: Date.now() }
  } else {
    const kg = parseKg(raw)
    if (kg === null) { toast('Enter the weight in kg, for example 42.5.'); return false }
    data = { name, kg, at: Date.now() }
  }
  let ok = true
  await run(async () => {
    try { await put(g, uid(g[0]), data) } catch (e) { ok = false; throw e }
  })
  if (ok) toast('Result recorded.')
  return ok
}
export const removeAttempt = (a) => ask('a' + a.id, () => run(() => del(game.value, a.id)))
export const setSledMode = (m) => { sledMode.value = m }
export const toggleOrg = () => { showOrg.value = !showOrg.value }
