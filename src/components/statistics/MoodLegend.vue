<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  moodCounts: Record<string, number>
  totalDiary: number
}>()

const moods = [
  {
    id: '1',
    name: 'Very Sad',
    icon: '/mood/verysad.svg',
    color: '#FCA5A5',
  },
  {
    id: '2',
    name: 'Sad',
    icon: '/mood/sad.svg',
    color: '#FDBA74',
  },
  {
    id: '3',
    name: 'Neutral',
    icon: '/mood/neutral.svg',
    color: '#FDE68A',
  },
  {
    id: '4',
    name: 'Happy',
    icon: '/mood/happy.svg',
    color: '#67E8F9',
  },
  {
    id: '5',
    name: 'Very Happy',
    icon: '/mood/veryhappy.svg',
    color: '#86EFAC',
  },
]

const moodData = computed(() => {
  return moods.map((mood) => {
    const total = props.moodCounts[mood.id] ?? 0

    const percent = props.totalDiary > 0
      ? Math.round((total / props.totalDiary) * 100)
      : 0

    return {
      ...mood,
      total,
      percent,
    }
  })
})
</script>

<template>
    <div class="flex flex-wrap justify-center items-center gap-4">
        <div
        v-for="mood in moodData"
        :key="mood.id"
        class="flex flex-col items-center text-center"
        >
            <img
                :src="mood.icon"
                :alt="mood.name"
                class="w-10 h-10 p-1 rounded-2xl border-2"
                :style="{ backgroundColor: mood.color }"
            />

            <div class="font-medium">
                {{ mood.percent }}%
            </div>

            <div class="text-xs text-gray-500">
                {{ mood.total }}
            </div>
        </div>
    </div>
</template>