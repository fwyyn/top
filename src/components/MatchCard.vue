<script setup>
import {
  meta, admin, showOrg, pend, tname, hue, winner, endsOf, statusLabel, flagPos,
  startMatch, addEnd, undoEnd, removeMatch
} from '../store'

defineProps({ m: { type: Object, required: true } })
</script>

<template>
  <li class="match" :class="'is-' + m.status">
    <div class="m-head">
      <span>{{ m.lane || 'Lane –' }}<template v-if="m.round"> · {{ m.round }}</template></span>
      <span class="st" :class="'st-' + m.status"><i v-if="m.status === 'live'" class="dot"></i>{{ statusLabel(m.status) }}</span>
    </div>
    <div class="m-body">
      <div class="side a" :class="{ win: winner(m) === 'a' }"><i class="chip" :style="{ '--h': hue(m.a) }"></i><span>{{ tname(m.a) }}</span></div>
      <div class="score" :aria-label="tname(m.a) + ' ' + endsOf(m).a + ', ' + tname(m.b) + ' ' + endsOf(m).b">
        {{ endsOf(m).a }}<i>–</i>{{ endsOf(m).b }}
      </div>
      <div class="side b" :class="{ win: winner(m) === 'b' }"><i class="chip" :style="{ '--h': hue(m.b) }"></i><span>{{ tname(m.b) }}</span></div>
    </div>
    <div v-if="m.status === 'live'" class="rope" :style="{ '--pos': flagPos(m) + '%' }" aria-hidden="true">
      <i class="mark wa"></i><i class="mark wb"></i><i class="mark mid"></i><i class="flag"></i>
    </div>
    <div class="slots" aria-hidden="true">
      <i
        v-for="n in meta.bestOf" :key="n" class="slot" :class="{ on: (m.ends || [])[n - 1] }"
        :style="{ '--h': hue(m[(m.ends || [])[n - 1]]) }" :title="'End ' + n"
      ></i>
    </div>
    <div v-if="admin" class="ctl">
      <button v-if="m.status === 'scheduled'" class="btn" type="button" @click="startMatch(m)">Start match</button>
      <template v-if="m.status === 'live'">
        <button class="btn" type="button" @click="addEnd(m, 'a')">
          <i class="chip" :style="{ '--h': hue(m.a) }"></i><span class="lbl">{{ tname(m.a) }} won end</span>
        </button>
        <button class="btn" type="button" @click="addEnd(m, 'b')">
          <i class="chip" :style="{ '--h': hue(m.b) }"></i><span class="lbl">{{ tname(m.b) }} won end</span>
        </button>
      </template>
      <button v-if="(m.ends || []).length" class="btn ghost" type="button" @click="undoEnd(m)">Undo last end</button>
      <button
        v-if="showOrg" class="btn warn" :class="{ armed: pend === 'm' + m.id }" type="button"
        @click="removeMatch(m)"
      >{{ pend === 'm' + m.id ? 'Confirm remove' : 'Remove match' }}</button>
    </div>
  </li>
</template>
