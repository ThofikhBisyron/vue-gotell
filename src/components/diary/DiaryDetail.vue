<script setup lang="ts">
import DiaryCard from './DiaryCard.vue';
import DiaryDatePicker from './DiaryDatePicker.vue';
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params.id)

</script>
<template>
  <div class="w-6/12">
    <DiaryDatePicker/>
    <DiaryCard/>
  </div>
</template>