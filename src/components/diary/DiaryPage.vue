<script setup lang="ts">
import DiaryFilter from './DiaryFilter.vue';
import DiaryList from './DiaryList.vue';
import type { Diary } from '@/types/diary'
import { useToast } from '@/composables/useToast';
import { ref, watch } from 'vue';
import { apiFetch } from '@/utils/apiFetch.ts';

const {showToast} = useToast()

const selectedDate = ref<Date | null>(null)
const search = ref('')

const diaries = ref<Diary[]>([])
const loading = ref(false)

const displayedMonth = ref({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
})


const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
}

const formatMonth = (date: Date) => ({
  year: date.getFullYear(),
  month: date.getMonth() + 1,
})

let requestId = 0

const getDiaries = async () => {
    const currentRequest = ++requestId
    const keyword = search.value.trim()
    const { year, month } = displayedMonth.value
    console.log(displayedMonth.value)
    loading.value = true

    try{

        let endpoint: string

        if (keyword.length > 0) {
            if (keyword.length < 2) {
                diaries.value = []
                showToast(
                'Search keyword must be at least 2 characters',
                'info',
                )
                return
            }
            
            endpoint = `/diary/search?q=${encodeURIComponent(keyword)}`
        } else if (selectedDate.value) {
            endpoint = `/diary/date/${formatDate(selectedDate.value)}`
        } else {
            endpoint = `/diary/month?year=${year}&month=${month}`
        }
        console.log(selectedDate)

        const response = await apiFetch(endpoint)

        if (!response.ok) {
        throw new Error(`Failed to get diary`)
        }

        const result = await response.json()
        if (currentRequest !== requestId) return
        diaries.value = result.diaries ?? []
    }catch (err){
        if (currentRequest !== requestId) return

        showToast(
            err instanceof Error ? err.message : 'Something went wrong',
            'error',
        )

        diaries.value = []
    } finally {
        if (currentRequest === requestId) {
        loading.value = false
        }
    }
}

watch(
  [selectedDate, search, displayedMonth],
  (_, __, onCleanup) => {
    const timer = setTimeout(getDiaries, 300)
    onCleanup(() => clearTimeout(timer))
  },
  { immediate: true, deep: true },
)

</script>
<template>

    <DiaryFilter
      v-model:search="search"
      v-model:selected-date="selectedDate"
    @update:month-year="displayedMonth = $event"
    />

    <DiaryList
      :diaries="diaries"
      :loading="loading"
    />

</template>