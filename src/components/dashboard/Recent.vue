<script setup lang="ts">
import { RouterLink } from 'vue-router';
import DiaryCard from '../diary/DiaryCard.vue';

const diarys = [
  { id : 1, 
    mood: 4, 
    date:"28 May 21", 
    title:"First day in work", 
    content:"Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus,Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus"},
  {id : 2, mood: 2, date:"28 May 21", title:"First day in work", content:"Hari Ini"}
]
</script>
<template>
  <div class="w-1/2">
    <div class="flex justify-between mb-3">
      <div>Recently added</div>
      <button class="hover:bg-purple-200 px-2 rounded-2xl">View all</button>
    </div>
    <div class="h-80 flex flex-col gap-2 overflow-auto">
      <div 
      v-for="diary in diarys"
      :key="diary.id">
        <DiaryCard
        :diary="diary"
        compact/>
    </div>
    </div>
  </div>
</template>