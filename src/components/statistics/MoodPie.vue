<script setup lang="ts">
import { computed } from 'vue'

import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

import { Pie } from 'vue-chartjs'

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend,
)

const props = defineProps<{
  moodCounts: Record<string, number>
}>()

const colors = [
  '#FCA5A5',
  '#FDBA74',
  '#FDE68A',
  '#67E8F9',
  '#86EFAC',
]

const data = computed(() => ({
  labels: [
    'Very Sad',
    'Sad',
    'Neutral',
    'Happy',
    'Very Happy',
  ],
  datasets: [
    {
      data: [
        props.moodCounts['1'] ?? 0,
        props.moodCounts['2'] ?? 0,
        props.moodCounts['3'] ?? 0,
        props.moodCounts['4'] ?? 0,
        props.moodCounts['5'] ?? 0,
      ],
      backgroundColor: colors,
      borderWidth: 0,
    },
  ],
}))

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
}
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-64">
      <Pie
        :data="data"
        :options="options"
      />
    </div>
  </div>
</template>