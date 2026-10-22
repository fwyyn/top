// Parsing, formatting and ranking for the fringe games.
// No dependencies, so the same code can be tested in plain Node.

// "12.34", "1:05.20" or "65.2" -> milliseconds. Two decimal places at most.
export function parseTime(raw) {
  const s = String(raw).trim().replace(',', '.')
  const m = s.match(/^(?:(\d{1,2}):)?(\d{1,4}(?:\.\d{1,2})?)$/)
  if (!m) return null
  const secs = Number(m[2])
  if (m[1] !== undefined && secs >= 60) return null
  const ms = Math.round(((m[1] ? Number(m[1]) : 0) * 60 + secs) * 1000)
  return ms > 0 && ms < 3600000 ? ms : null
}

// "42", "42.5" or "42,25" -> kilograms. Two decimal places at most.
export function parseKg(raw) {
  const s = String(raw).trim().replace(',', '.')
  if (!/^\d{1,4}(\.\d{1,2})?$/.test(s)) return null
  const kg = Number(s)
  return kg > 0 && kg <= 1000 ? kg : null
}

export function fmtTime(ms) {
  if (ms < 60000) return (ms / 1000).toFixed(2) + ' s'
  const m = Math.floor(ms / 60000)
  const s = (ms - m * 60000) / 1000
  return m + ':' + s.toFixed(2).padStart(5, '0')
}

export const fmtKg = (kg) => Number(kg.toFixed(2)) + ' kg'

export const fmtValue = (game, v) => (game === 'sled' ? fmtTime(v) : fmtKg(v))

// How far behind the leader a row is. Empty for the leader.
export function fmtGap(game, gap) {
  if (!gap) return '–'
  return game === 'sled' ? '+' + fmtTime(gap) : '−' + fmtKg(gap)
}

// One row per athlete: their best attempt, ranked.
// Sled: lowest time wins, and only attempts in the chosen mode (pull or push) count.
// Grip: heaviest weight wins.
// Equal results share a rank (1, 2, 2, 4).
export function buildBoard(attempts, game, mode) {
  const lower = game === 'sled'
  const best = new Map()
  attempts.forEach((a) => {
    if (lower && a.mode !== mode) return
    const v = lower ? a.ms : a.kg
    if (typeof v !== 'number' || !a.name) return
    const key = String(a.name).trim().toLowerCase()
    const cur = best.get(key)
    if (!cur) { best.set(key, { key, name: a.name, value: v, tries: 1, rank: 0, gap: 0 }); return }
    cur.tries++
    if (lower ? v < cur.value : v > cur.value) { cur.value = v; cur.name = a.name }
  })
  const list = Array.from(best.values()).sort((x, y) =>
    (lower ? x.value - y.value : y.value - x.value) || x.name.localeCompare(y.name))
  list.forEach((r, i) => {
    const p = list[i - 1]
    r.rank = p && p.value === r.value ? p.rank : i + 1
    r.gap = Math.abs(r.value - list[0].value)
  })
  return list
}
