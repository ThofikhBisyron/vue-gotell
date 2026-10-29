<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import DiaryForm from '@/components/diary/DiaryForm.vue';
import { useRoute } from 'vue-router'
import type { Diary } from '@/types/diary'
import { onMounted, ref } from 'vue';
import { apiFetch } from '@/utils/apiFetch';

const route = useRoute()
const diary = ref<Diary | null>(null)
const loading = ref(true)

const getDiary = async () => {
  try {
    const response = await apiFetch(`/diary/${route.params.id}`)

    if (!response.ok) {
      throw new Error('Failed to get diary')
    }

    const result = await response.json()
    diary.value = result.diary
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(getDiary)


</script>

<template>
    <AppLayout>
        <DiaryForm
        v-if="diary"
        :diary="diary"/>
    </AppLayout>
</template>