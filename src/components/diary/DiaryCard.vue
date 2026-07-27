<script setup lang="ts">
import DiaryOption from './DiaryOption.vue';
import { ref } from 'vue';

const diarys = [
  {id : 1, mood:"/mood/happy.svg", date:"28 May 21", title:"First day in work", content:"Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus"},
  {id : 2, mood:"/mood/happy.svg", date:"28 May 21", title:"First day in work", content:"Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus"}
]

const activeMenu = ref<number | null>(null)
const toggleMenu = (id: number) => {
  activeMenu.value = activeMenu.value === id ? null : id
}
</script>
<template>
      <div class="relative bg-white p-5 rounded-xl flex flex-col gap-2" 
      v-for="diary in diarys"
      :key="diary.id">
        <div class="flex justify-between">
          <img
          :src="diary.mood"
          class="w-10 h-10"
          /> 
          <button @click="toggleMenu(diary.id)"
          class="relative cursor-pointer hover:bg-gray-200 rounded-4xl">
            <img
            src="/option.svg"
            />
          </button>
          <Transition name="menu"
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 scale-95 -translate-y-2"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 -translate-y-2">
            <DiaryOption
            v-if="activeMenu === diary.id"/>
          </Transition>
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