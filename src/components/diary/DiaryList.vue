<script setup lang="ts">
import DiaryCard from './DiaryCard.vue';
import { RouterLink } from 'vue-router';

const diarys = [
  { id : 1, 
    mood:"/mood/happy.svg", 
    date:"28 May 21", 
    title:"First day in work", 
    content:"Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus,Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus"},
  {id : 2, mood:"/mood/happy.svg", date:"28 May 21", title:"First day in work", content:"Hari Ini"}
]
</script>
<template>
  <div class="h-80 w-1/2 flex flex-col gap-2 overflow-auto">
    <div 
    v-for="diary in diarys"
    :key="diary.id">
      <DiaryCard
      :diary="diary"
      compact/>
  </div>
  </div>
</template>