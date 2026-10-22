<script setup>
import { rows, moves, catLabel, meta, admin, showOrg, pend, removeTeam } from '../store'
</script>

<template>
  <section class="panel" aria-labelledby="st-h">
    <div class="panel-h"><h2 id="st-h">Standings</h2><span class="sub">{{ catLabel }}</span></div>
    <div class="cols rows-head" aria-hidden="true">
      <span>Pos</span><span>Team</span><span class="n">P</span><span class="n">W</span><span class="n">L</span><span class="n col-ends">Ends</span><span class="n">Pts</span>
    </div>
    <p v-if="!rows.length" class="empty">No teams in this class yet.</p>
    <TransitionGroup v-else name="flip" tag="ol" class="rows">
      <li v-for="r in rows" :key="r.team.id" class="cols row" :class="r.rank ? 'p' + r.rank : ''">
        <span class="rank">
          <b>{{ r.rank || '–' }}</b>
          <em
            v-if="moves[r.team.id]" class="mv" :class="moves[r.team.id] > 0 ? 'up' : 'down'"
            :aria-label="(moves[r.team.id] > 0 ? 'Up ' : 'Down ') + Math.abs(moves[r.team.id])"
          >{{ moves[r.team.id] > 0 ? '▲' : '▼' }}{{ Math.abs(moves[r.team.id]) }}</em>
        </span>
        <span class="tcell">
          <i class="chip" :style="{ '--h': r.team.hue }"></i>
          <span class="tname">{{ r.team.name }}</span>
          <button
            v-if="admin && showOrg" class="mini" :class="{ armed: pend === 't' + r.team.id }" type="button"
            @click="removeTeam(r.team)"
          >{{ pend === 't' + r.team.id ? 'Confirm' : 'Remove' }}</button>
        </span>
        <span class="n">{{ r.p }}</span>
        <span class="n">{{ r.w }}</span>
        <span class="n">{{ r.l }}</span>
        <span class="n col-ends" :title="r.ew + ' ends won, ' + r.el + ' lost'">{{ r.diff > 0 ? '+' : '' }}{{ r.diff }}</span>
        <span class="pts">{{ r.pts }}</span>
      </li>
    </TransitionGroup>
    <p class="legend">
      P played · W won · L lost · Ends = ends won minus ends lost · A match win is worth {{ meta.winPts }} pts.
      Ties are split by end difference, then ends won.
    </p>
  </section>
</template>
