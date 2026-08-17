<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import DiaryForm from '@/components/diary/DiaryForm.vue';
import { useRoute } from 'vue-router'
import type { Diary } from '@/types/diary'

const route = useRoute()
const diarys: Diary[] = [
  {
    id: 1,
    mood: 4,
    date: '2026-08-18',
    title: 'First day in work',
    content: 'Hari ini saya mulai bekerja...'
  }
]

const diaryId = Number(route.params.id)
const diary = diarys.find(
  diary => diary.id === diaryId
)


</script>

<template>
    <AppLayout>
        <DiaryForm
        v-if="diary"
        :diary="diary"/>
    </AppLayout>
</template>