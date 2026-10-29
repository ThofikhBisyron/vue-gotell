<script setup lang="ts">
import DiaryCard from './DiaryCard.vue';
import { RouterLink } from 'vue-router';
import DiarySkeleton from './DiarySkeleton.vue'
import type { Diary } from '@/types/diary.ts'; 

defineProps<{
  diaries: Diary[]
  loading: boolean
}>()


</script>
<template>
  <div class="h-80 w-1/2 flex flex-col gap-2 overflow-auto">
    <div v-if="loading">
      <DiarySkeleton/>
      <DiarySkeleton/>
    </div>

    <div v-else-if="diaries.length > 0" 
    v-for="diary in diaries"
    :key="diary.id">
      <DiaryCard
      :diary="diary"
      compact/>
    </div>

    <div v-else class="text-xl text-gray-500 text-center">
      no diary yet.
    </div>
  </div>
</template>