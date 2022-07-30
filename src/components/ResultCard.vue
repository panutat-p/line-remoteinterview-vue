<script setup lang="ts">
import type { ResultDto } from '@/types/result.dto';
import { toMinuteSecond } from '@/composable/utils';

defineProps<{ data: ResultDto }>();
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-2xl">Total {{ data.total }} Websites</h2>
      <p>(Used {{ toMinuteSecond(data.elapsedTimeMilli) }})</p>
      <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat bg-green-500 text-white">
          <div class="stat-title font-bold">Up</div>
          <div class="stat-value">{{ data.up }}</div>
        </div>

        <div class="stat">
          <div class="stat-title font-bold">Down</div>
          <div class="stat-value">{{ data.down }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
