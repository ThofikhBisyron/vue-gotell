<script setup lang="ts">
import DiaryCard from '../diary/DiaryCard.vue';

const diarys = [
  {mood:"/mood/happy.svg", date:"28 May 21", title:"First day in work", content:"Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus"},
  {mood:"/mood/happy.svg", date:"28 May 21", title:"First day in work", content:"Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus"}
]
</script>
<template>
  <div class="w-1/2">
    <div class="flex justify-between mb-3">
      <div>Recently added</div>
      <button>View all</button>
    </div>
    <div class="h-80 flex flex-col gap-3 overflow-auto">
      <DiaryCard/>
    </div>
  </div>
</template>