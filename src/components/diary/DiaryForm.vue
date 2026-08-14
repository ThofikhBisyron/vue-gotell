<script setup lang="ts">
import DiaryDatePicker from './DiaryDatePicker.vue';
import DiaryMoodPicker from './DiaryMoodPicker.vue';
import { ref } from 'vue';

const title = ref('')
const content = ref('')
const selectedMood = ref<number | null>(null)


</script>
<template>
  <div class="w-6/12">
    <DiaryDatePicker/>

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
    @click="console.log(selectedMood)">
      <div class="text-white text-xl">
        Save
      </div>
    </button>
  </div>
</template>