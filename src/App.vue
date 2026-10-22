<script setup>
import {
  meta, synced, loading, admin, authReady, user, configured, clock, liveCount, cats, catId, pick,
  hasExamples, showOrg, toggleOrg, msg, pend, clearExamples, signIn, signOutUser, GAMES, game, pickGame
} from './store'
import StandingsTable from './components/StandingsTable.vue'
import MatchesPanel from './components/MatchesPanel.vue'
import OrganizerPanel from './components/OrganizerPanel.vue'
import FringeBoard from './components/FringeBoard.vue'
</script>

<template>
  <div class="wrap">
    <header class="top">
      <div class="title">
        <p class="eyebrow">Live results</p>
        <h1>{{ meta.name }}</h1>
      </div>
      <div class="top-side">
        <span class="pill" :class="{ 'pill-live': liveCount > 0 }">
          <i class="dot"></i>
          <span v-if="liveCount > 0">{{ liveCount }} live now</span>
          <span v-else-if="synced">Synced {{ clock }}</span>
          <span v-else>Not synced</span>
        </span>
        <button v-if="admin" class="btn ghost" type="button" :aria-expanded="showOrg" @click="toggleOrg">Organizer tools</button>
        <button v-if="configured && authReady && !user" class="btn ghost" type="button" @click="signIn">Organizer sign-in</button>
        <button v-if="configured && user" class="btn ghost" type="button" @click="signOutUser">Sign out</button>
      </div>
    </header>

    <div v-if="!configured" class="notice" role="note">
      <span>Demo mode: Firebase is not configured, so changes stay in this browser tab. See the README to go live.</span>
    </div>
    <div v-if="hasExamples" class="notice" role="note">
      <span>These are example teams and results. Real standings appear once the organizer replaces them.</span>
      <button v-if="admin" class="btn warn" :class="{ armed: pend === 'xall' }" type="button" @click="clearExamples">
        {{ pend === 'xall' ? 'Confirm clear' : 'Clear examples' }}
      </button>
    </div>

    <nav class="games" role="tablist" aria-label="Events">
      <button
        v-for="g in GAMES" :key="g.id" class="gtab" type="button" role="tab"
        :aria-selected="g.id === game" @click="pickGame(g.id)"
      >{{ g.label }}</button>
    </nav>

    <p v-if="loading" class="muted">Connecting to live results…</p>

    <template v-else-if="game === 'tow'">
      <OrganizerPanel v-if="admin && showOrg" />

      <nav v-if="cats.length" class="tabs" role="tablist" aria-label="Weight classes">
        <button
          v-for="c in cats" :key="c.id" class="tab" type="button" role="tab"
          :aria-selected="c.id === catId" @click="pick(c.id)"
        >{{ c.label }}</button>
      </nav>

      <section v-if="!cats.length" class="panel">
        <p class="empty">
          No weight classes yet.
          {{ admin ? 'Open Organizer tools and add a class such as 540 kg, then add teams.' : 'Standings appear here as soon as the organizer adds teams.' }}
        </p>
      </section>
      <main v-else class="grid">
        <StandingsTable />
        <MatchesPanel />
      </main>
    </template>

    <FringeBoard v-else />

    <div class="toast" role="status" aria-live="polite">{{ msg }}</div>
  </div>
</template>
