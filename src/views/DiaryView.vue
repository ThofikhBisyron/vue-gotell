<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import DiaryFilter from '@/components/diary/DiaryFilter.vue';
import DiaryList from '@/components/diary/DiaryList.vue';
</script>

<template>
    <AppLayout>
        <DiaryFilter/>
        <DiaryList/>
    </AppLayout>
</template>