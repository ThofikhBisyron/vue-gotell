<script setup lang="ts">
import { ref } from 'vue'
import { useProfileStore } from '@/stores/profile';
import { useRouter } from 'vue-router'

const router = useRouter()
const profileStore = useProfileStore()

const moods = [
  { id: 1, name: 'Very Sad', icon: '/mood/verysad.svg', bg: 'bg-rose-200' },
  { id: 2, name: 'Sad', icon: '/mood/sad.svg', bg: 'bg-orange-200' },
  { id: 3, name: 'Neutral', icon: '/mood/neutral.svg', bg: 'bg-yellow-200' },
  { id: 4, name: 'Happy', icon: '/mood/happy.svg', bg: 'bg-cyan-200' },
  { id: 5, name: 'Very Happy', icon: '/mood/veryhappy.svg', bg: 'bg-green-300' },
]

function selectMood(id: number) {
  router.push({
    path: '/add-diary',
    query: {
      mood_id: String(id),
    },
  })
}

</script>
<template>
  <div class="flex flex-col gap-3 text-center mb-10">
    <div class="text-gray-500 text-xl italic">Hello, {{ profileStore.profile?.last_name }}</div>
    <div class="text-2xl font-semibold">How are you doing today ?</div>
    <div class="flex flex-wrap justify-center gap-3">
      <button
        v-for="mood in moods"
        :key="mood.id"
        type="button"
        @click="selectMood(mood.id)"
        class="cursor-pointer rounded-2xl transition-all duration-200 hover:scale-110"
      >
        <img
          :src="mood.icon"
          :alt="mood.name"
          :class="['w-16 h-16 p-2 rounded-2xl', mood.bg]"
        />
      </button>
    </div>
  </div>
</template>