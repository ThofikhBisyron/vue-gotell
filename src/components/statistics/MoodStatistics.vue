<script setup lang="ts">
import { ref, watch, computed } from 'vue'

import Filter from './Filter.vue'
import Calendar from './Calendar.vue'
import MoodPie from './MoodPie.vue'
import MoodLegend from './MoodLegend.vue'

import { useStatisticStore } from '@/stores/statistics.ts'

const statisticStore = useStatisticStore()

const selectedPeriod = ref<'weekly' | 'monthly' | 'yearly'>('weekly')
const selectedDate = ref(new Date())


function formatLocalDate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

watch(
  [selectedPeriod, selectedDate],
  ([period, date]) => {
    statisticStore.fetchStatistics(
      period,
      formatLocalDate(date),
    ).catch((error) => {
      console.error('Failed to fetch statistics:', error)
    })
  },
  {
    immediate: true,
  },
)

const statistics = computed(() => statisticStore.statistics)

const moodCounts = computed(() =>
  statistics.value?.mood_counts ?? {},
)

const totalDiary = computed(() =>
  statistics.value?.total_diary ?? 0,
)
</script>

<template>
  <div class="w-full max-w-3xl mx-auto px-4 flex flex-col gap-5">

    <div class="flex items-center justify-between gap-3">
      <Filter v-model="selectedPeriod" />

      <Calendar v-model="selectedDate" />
    </div>

    <div class="w-full bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center gap-5">

      <div
        v-if="statisticStore.loading && !statistics"
        class="w-full text-center py-10"
      >
        Loading statistics...
      </div>

      <div
        v-else-if="statisticStore.error && !statistics"
        class="w-full text-center text-red-500 py-10"
      >
        {{ statisticStore.error }}
      </div>

      <template v-else-if="statistics">

        <div class="w-full text-center">
          <p class="text-gray-500">
            Total Diary
          </p>

          <h2 class="text-3xl font-bold">
            {{ totalDiary }}
          </h2>

          <p class="text-sm text-gray-400">
            {{ statistics.start_date }}
            -
            {{ statistics.end_date }}
          </p>
        </div>

        <div class="w-full flex justify-center">
          <MoodPie :mood-counts="moodCounts" />
        </div>

        <div class="w-full flex justify-center">
          <MoodLegend
            :mood-counts="moodCounts"
            :total-diary="totalDiary"
          />
        </div>

      </template>

      <div
        v-else
        class="w-full text-center py-10"
      >
        No statistics available
      </div>

    </div>
  </div>
</template>