<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import Filter from '@/components/statistics/Filter.vue';
import MoodPie from '@/components/statistics/MoodPie.vue';
import MoodLegend from '@/components/statistics/MoodLegend.vue';
import MoodStatistics from '@/components/statistics/MoodStatistics.vue';
</script>

<template>
    <AppLayout>
        <MoodStatistics/>
    </AppLayout>
</template>