<script setup lang="ts">
import DiaryDatePicker from './DiaryDatePicker.vue';
import DiaryMoodPicker from './DiaryMoodPicker.vue';
import type { Diary } from '@/types/diary.ts';
import { ref } from 'vue';

const props = defineProps<{
  diary?: Diary
}>()

const title = ref(props.diary?.title ?? '')
const content = ref(props.diary?.content ?? '')
const selectedMood = ref<number | null>(props.diary?.mood ?? null)
const selectedDate = ref<Date>(props.diary?.date ? new Date(props.diary.date) : new Date)

const formattedDate = (date: Date) => {
  return date.toISOString().split('T')[0]
}

const saveDiary = () => {
  const data = {
    title: title.value,
    date: formattedDate(selectedDate.value),
    content: content.value,
    mood: selectedMood.value,
  }
  console.log(data)
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