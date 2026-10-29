<script setup lang="ts">
import DiaryCard from './DiaryCard.vue';
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Diary } from '@/types/diary.ts';
import { useToast } from '@/composables/useToast';
import { apiFetch } from '@/utils/apiFetch.ts';
import DiarySkeleton from './DiarySkeleton.vue';

const route = useRoute()
const apiUrl = import.meta.env.VITE_API_URL
const loading = ref(true)
const diary = ref<Diary | null>(null)
const {showToast} = useToast()

let requestId = 0


const getDiaryById = async () => {
  loading.value = true
  const id = route.params.id

  if (typeof id !== 'string' || !/^\d+$/.test(id)) {
    diary.value = null
    loading.value = false
    return
  }

  const currentRequest = ++requestId
  diary.value = null

  try{
    const response = await apiFetch(`/diary/${id}`)


  if (!response.ok) {
      throw new Error(`failed to get diary`)
  }

  const result = await response.json()
  if (currentRequest !== requestId) return

  diary.value = result.diary
  }catch(err) {
   if (currentRequest !== requestId) return

    showToast(
      err instanceof Error ? err.message : 'Something went wrong',
      'error',
    )
  } finally {
    if (currentRequest === requestId) {
        loading.value = false
    }
  }
}
watch(() => route.params.id, getDiaryById, {
  immediate: true,
})

</script>
<template>
  <div class="w-6/12">
    <DiarySkeleton v-if="loading"/>
    <DiaryCard
    v-else-if="diary"
    :diary="diary"/>
    <p v-else class="text-gray-500">
    Nothing here
  </p>
  </div>
</template>