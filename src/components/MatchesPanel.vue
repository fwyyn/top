<script setup>
import { meta, catMatches, groups } from '../store'
import MatchCard from './MatchCard.vue'
</script>

<template>
  <section class="panel" aria-labelledby="mt-h">
    <div class="panel-h"><h2 id="mt-h">Matches</h2><span class="sub">Best of {{ meta.bestOf }}</span></div>
    <p v-if="!catMatches.length" class="empty">No matches scheduled in this class yet.</p>
    <div v-else class="mbody">
      <template v-for="g in groups" :key="g.key">
        <div v-if="g.items.length">
          <h3 class="grp">{{ g.title }} <span>{{ g.items.length }}</span></h3>
          <ul class="mlist">
            <MatchCard v-for="m in g.items" :key="m.id" :m="m" />
          </ul>
        </div>
      </template>
    </div>
  </section>
</template>
