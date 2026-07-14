<script setup lang="ts">

const diarys = [
  {mood:"/mood/happy.svg", date:"28 May 21", title:"First day in work", content:"Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus"},
  {mood:"/mood/happy.svg", date:"28 May 21", title:"First day in work", content:"Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus"}
]
</script>
<template>
      <div class="bg-white p-5 rounded-xl flex flex-col gap-2" v-for="diary in diarys">
        <div class="flex justify-between">
          <img
          :src="diary.mood"
          class="w-10 h-10"
          />
          <img
          src="/option.svg"
          />
        </div>
        <div class="w-fit p-1 bg-blue-200">
          {{ diary.date }}
        </div>
        <div>
          {{ diary.title }}
        </div>
        <div>
          {{ diary.content }}
        </div>
      </div>
</template>