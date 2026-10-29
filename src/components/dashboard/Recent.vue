<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useToast } from '@/composables/useToast';
import DiaryCard from '../diary/DiaryCard.vue';
import { onMounted, ref } from 'vue';
import type { Diary } from '@/types/diary.ts'
import DiaryCardSkeleton from '../diary/DiarySkeleton.vue'
import { apiFetch } from '@/utils/apiFetch.ts';


const apiUrl = import.meta.env.VITE_API_URL
const diary = ref<Diary | null>(null)
const loading = ref(true)
const  { showToast } = useToast()

const getRecentDiary = async () => {
  loading.value = true
  try{
    const response = await apiFetch(`/diary/recent`)

  if (!response.ok) {
      throw new Error(`failed to get diary`)
  }
  const result = await response.json()
  diary.value = result.diary
  console.log(result)
  }catch(err) {
    showToast(
      err instanceof Error ? err.message : 'Something went wrong', 'error',
  )
  } finally {
    loading.value = false
  }



}

onMounted(getRecentDiary)
</script>
<template>
  <div class="w-1/2">
    <div class="flex justify-between mb-3">
      <div>Recently added</div>
      <button class="hover:bg-purple-200 px-2 rounded-2xl">View all</button>
    </div>
    <div class="h-80 flex flex-col gap-2 overflow-auto">
      <DiaryCardSkeleton v-if="loading" />
      <div 
        v-else-if="diary"
        :key="diary.id">
          <DiaryCard
          :diary="diary"
          compact/>
      </div>
      <div v-else class="text-sm text-gray-500">
         Belum ada diary.
      </div>
    </div>
  </div>
</template>