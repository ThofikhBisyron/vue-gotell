<script setup lang="ts">
import { apiFetch } from '@/utils/apiFetch.ts';
import DiaryDatePicker from './DiaryDatePicker.vue';
import DiaryMoodPicker from './DiaryMoodPicker.vue';
import { useToast } from '@/composables/useToast.ts';
import type { Diary } from '@/types/diary.ts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  diary?: Diary
}>()

const {showToast} = useToast()
const router = useRouter()

const title = ref(props.diary?.title ?? '')
const content = ref(props.diary?.content ?? '')
const selectedMood = ref<number | null>(props.diary?.mood_id ?? null)
const getInitialDate = (): Date => {
  if (!props.diary?.date) return new Date()

  const [year, month, day] = props.diary.date
    .slice(0, 10)
    .split('-')
    .map(Number)

  return new Date(year!, month! - 1, day!)
}

const selectedDate = ref<Date>(getInitialDate())

const formattedDate = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  const timezoneOffset = -date.getTimezoneOffset()
  const sign = timezoneOffset >= 0 ? '+' : '-'
  const hours = String(Math.floor(Math.abs(timezoneOffset) / 60)).padStart(2, '0')
  const minutes = String(Math.abs(timezoneOffset) % 60).padStart(2, '0')

  return `${year}-${month}-${day}T00:00:00${sign}${hours}:${minutes}`
}

const saveDiary = async () => {

  try{
    const isEdit = !!props.diary

    const endpoint = isEdit
      ? `/diary/${props.diary!.id}`
      : '/diary/'

    const response = await apiFetch(endpoint, {
      method: isEdit ? 'PATCH' : 'POST',
      headers: {
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        mood_id : selectedMood.value,
        title : title.value,
        content : content.value,
        date : formattedDate(selectedDate.value),
      })
    })

    if (!response.ok) {
      throw new Error(
        isEdit ? 'Failed to update diary' : 'Failed to create diary'
      )
    }

    showToast(
      isEdit ? 'Diary updated successfully' : 'Diary created successfully',
      'success'
    )
    const result = await response.json()
    const diaryId = isEdit ? props.diary!.id : result.diary.id

    router.push(`/diary/${diaryId}`)

  } catch(err){
    showToast(
      err instanceof Error ? err.message : 'Something went wrong',
      'error'
    )
  } finally {

  }
  
  if (props.diary) {
    console.log('Edit Diary', props.diary.id)
  } else {
    console.log('add diary')
  }
}


</script>
<template>
  <div class="w-6/12">
    <DiaryDatePicker
    v-model="selectedDate"/>

    <div class=" bg-white rounded-xl mb-5">

      <input
      v-model="title"
      placeholder="Headline"
      class="w-full p-2 rounded-l-xl rounded-r-xl rounded-b-none h-15 outline-0"
      />

      <textarea
      v-model="content"
      placeholder="Start Typing"
      class="w-full rounded-xl p-2 h-80 outline-0"
      ></textarea>
      
    </div>

    <DiaryMoodPicker
    v-model="selectedMood"/>
    <button 
    class="w-full flex justify-center bg-black p-3 mt-5 rounded-xl cursor-pointer"
    @click="saveDiary">
      <div class="text-white text-xl">
        {{ props.diary ? 'Update' : 'Save'}}
      </div>
    </button>
  </div>
</template>