<script setup>
import { reactive, ref, computed } from 'vue'
import {
  game, sledMode, fringeRows, fringeLog, bestKeys, athleteNames, moves, moveKey,
  admin, showOrg, pend, addAttempt, removeAttempt, setSledMode
} from '../store'
import { fmtValue, fmtGap } from '../fringe'

const form = reactive({ name: '', val: '' })
const nameEl = ref(null)

const isSled = computed(() => game.value === 'sled')
const modeLabel = computed(() => (sledMode.value === 'pull' ? 'Pull' : 'Push'))
const title = computed(() => (isSled.value ? 'Sled ' + modeLabel.value.toLowerCase() : 'Handgrip'))
const rule = computed(() => (isSled.value ? 'Lowest time wins' : 'Heaviest weight wins'))
const bestHead = computed(() => (isSled.value ? 'Best time' : 'Best grip'))
const valueLabel = computed(() => (isSled.value ? 'Time (' + modeLabel.value.toLowerCase() + ')' : 'Weight gripped (kg)'))
const valueHint = computed(() => (isSled.value ? 'e.g. 12.34 or 1:05.20' : 'e.g. 42.5'))

async function submit() {
  if (await addAttempt({ name: form.name, raw: form.val })) {
    form.name = ''
    form.val = ''
    if (nameEl.value) nameEl.value.focus()
  }
}
</script>

<template>
  <div class="grid">
    <section class="panel" aria-labelledby="fb-h">
      <div class="panel-h">
        <h2 id="fb-h">{{ title }}</h2>
        <span class="sub">{{ rule }}</span>
      </div>

      <div v-if="isSled" class="seg" role="tablist" aria-label="Sled event">
        <button class="tab" type="button" role="tab" :aria-selected="sledMode === 'pull'" @click="setSledMode('pull')">Pull</button>
        <button class="tab" type="button" role="tab" :aria-selected="sledMode === 'push'" @click="setSledMode('push')">Push</button>
      </div>

      <div class="cols cols-f rows-head" aria-hidden="true">
        <span>Pos</span><span>{{ isSled ? 'Athlete / team' : 'Athlete' }}</span>
        <span class="n">Tries</span><span class="n col-gap">Behind</span><span class="n">{{ bestHead }}</span>
      </div>
      <p v-if="!fringeRows.length" class="empty">
        No {{ isSled ? modeLabel.toLowerCase() : 'grip' }} results yet.
        {{ admin ? 'Record the first result in the panel on this page.' : 'Results appear here as soon as they are recorded.' }}
      </p>
      <TransitionGroup v-else name="flip" tag="ol" class="rows">
        <li v-for="r in fringeRows" :key="r.key" class="cols cols-f row" :class="'p' + r.rank">
          <span class="rank">
            <b>{{ r.rank }}</b>
            <em
              v-if="moves[moveKey(r)]" class="mv" :class="moves[moveKey(r)] > 0 ? 'up' : 'down'"
              :aria-label="(moves[moveKey(r)] > 0 ? 'Up ' : 'Down ') + Math.abs(moves[moveKey(r)])"
            >{{ moves[moveKey(r)] > 0 ? '▲' : '▼' }}{{ Math.abs(moves[moveKey(r)]) }}</em>
          </span>
          <span class="tcell"><span class="tname">{{ r.name }}</span></span>
          <span class="n">{{ r.tries }}</span>
          <span class="n col-gap muted">{{ fmtGap(game, r.gap) }}</span>
          <span class="best">{{ fmtValue(game, r.value) }}</span>
        </li>
      </TransitionGroup>
      <p class="legend">
        Each athlete is ranked on their best attempt{{ isSled ? ' in this event' : '' }}.
        Equal results share a position.
      </p>
    </section>

    <div class="stack">
      <form v-if="admin" class="panel rec" @submit.prevent="submit">
        <div class="fld">
          <h3>Record result</h3>
          <label for="f-name">{{ isSled ? 'Athlete or team' : 'Athlete' }}</label>
          <input id="f-name" ref="nameEl" v-model.trim="form.name" list="f-names" maxlength="40" autocomplete="off" placeholder="Name">
          <datalist id="f-names"><option v-for="n in athleteNames" :key="n" :value="n"></option></datalist>
          <label for="f-val">{{ valueLabel }}</label>
          <input id="f-val" v-model.trim="form.val" :inputmode="isSled ? 'text' : 'decimal'" autocomplete="off" :placeholder="valueHint">
          <button class="btn" type="submit">Record {{ isSled ? modeLabel.toLowerCase() : 'grip' }} result</button>
        </div>
      </form>

      <section class="panel" aria-labelledby="fl-h">
        <div class="panel-h"><h2 id="fl-h">Attempts</h2><span class="sub">{{ fringeLog.length }} recorded</span></div>
        <p v-if="admin && !showOrg && fringeLog.length" class="hint pad">Open Organizer tools to remove an entry.</p>
        <p v-if="!fringeLog.length" class="empty">Nothing recorded yet.</p>
        <ul v-else class="log">
          <li v-for="a in fringeLog" :key="a.id" class="att">
            <span class="aname">{{ a.name }}</span>
            <span class="aval">
              {{ fmtValue(game, isSled ? a.ms : a.kg) }}
              <i v-if="bestKeys.has(a.id)" class="tag">Best</i>
            </span>
            <button
              v-if="admin && showOrg" class="mini" :class="{ armed: pend === 'a' + a.id }" type="button"
              @click="removeAttempt(a)"
            >{{ pend === 'a' + a.id ? 'Confirm' : 'Remove' }}</button>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
