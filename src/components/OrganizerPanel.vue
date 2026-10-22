<script setup>
import { reactive } from 'vue'
import {
  meta, catId, catLabel, catTeams, need, cats, addCategory, addTeam, addMatch, saveMeta, loadExamples
} from '../store'

const forms = reactive({ cat: '', team: '', a: '', b: '', round: '', lane: '' })

async function submitCategory() { if (await addCategory(forms.cat)) forms.cat = '' }
async function submitTeam() { if (await addTeam(forms.team)) forms.team = '' }
async function submitMatch() {
  if (await addMatch({ a: forms.a, b: forms.b, round: forms.round, lane: forms.lane })) { forms.a = ''; forms.b = '' }
}
</script>

<template>
  <section class="org" aria-label="Organizer tools">
    <div class="org-grid">
      <form class="fld" @submit.prevent="submitCategory">
        <h3>Weight class</h3>
        <label for="cat-name">Class name</label>
        <input id="cat-name" v-model.trim="forms.cat" maxlength="40" placeholder="e.g. Mixed 540 kg" autocomplete="off">
        <button class="btn" type="submit">Add class</button>
      </form>

      <form class="fld" @submit.prevent="submitTeam">
        <h3>Team</h3>
        <label for="team-name">Team name{{ catLabel ? ' (' + catLabel + ')' : '' }}</label>
        <input id="team-name" v-model.trim="forms.team" maxlength="40" placeholder="e.g. Rope Runners" autocomplete="off" :disabled="!catId">
        <button class="btn" type="submit" :disabled="!catId">Add team</button>
      </form>

      <form class="fld" @submit.prevent="submitMatch">
        <h3>Match</h3>
        <label for="m-a">Team A (left)</label>
        <select id="m-a" v-model="forms.a" :disabled="!catId">
          <option value="">Choose team</option>
          <option v-for="t in catTeams" :key="t.id" :value="t.id">{{ t.name }}</option>
        </select>
        <label for="m-b">Team B (right)</label>
        <select id="m-b" v-model="forms.b" :disabled="!catId">
          <option value="">Choose team</option>
          <option v-for="t in catTeams" :key="t.id" :value="t.id">{{ t.name }}</option>
        </select>
        <label for="m-round">Round</label>
        <input id="m-round" v-model.trim="forms.round" maxlength="24" placeholder="e.g. Pool, Semi-final" autocomplete="off">
        <label for="m-lane">Lane</label>
        <input id="m-lane" v-model.trim="forms.lane" maxlength="16" placeholder="e.g. Lane 1" autocomplete="off">
        <button class="btn" type="submit" :disabled="!catId">Add match</button>
      </form>

      <div class="fld">
        <h3>Event settings</h3>
        <label for="ev-name">Event name</label>
        <input id="ev-name" :value="meta.name" maxlength="60" @change="saveMeta({ name: $event.target.value.trim() || meta.name })">
        <label for="ev-pts">Points for a match win</label>
        <select id="ev-pts" :value="meta.winPts" @change="saveMeta({ winPts: Number($event.target.value) })">
          <option :value="1">1</option><option :value="2">2</option><option :value="3">3</option>
        </select>
        <label for="ev-best">Ends per match</label>
        <select id="ev-best" :value="meta.bestOf" @change="saveMeta({ bestOf: Number($event.target.value) })">
          <option :value="3">Best of 3</option><option :value="5">Best of 5</option>
        </select>
      </div>
    </div>
    <p class="hint">
      Scores are entered on each match card: tap the team that won the end. The match closes when a team reaches {{ need }} ends.
    </p>
    <div v-if="!cats.length">
      <button class="btn ghost" type="button" @click="loadExamples">Load example teams and matches</button>
    </div>
  </section>
</template>
