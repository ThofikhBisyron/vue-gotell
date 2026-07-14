<script setup lang="ts">
import Filter from './Filter.vue';
import Calendar from './Calendar.vue';
import MoodPie from './MoodPie.vue';
import MoodLegend from './MoodLegend.vue';
</script>

<template>
    <Filter/>
    <div class="flex flex-col w-11/12 bg-white mt-10 p-5 rounded-2xl gap-3">
        <Calendar/>
        <MoodPie/>
        <MoodLegend/>
    </div>
</template>