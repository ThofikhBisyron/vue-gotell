<script setup lang="ts">
import { ref } from 'vue';


const selectedDate = ref(new Date())
const search = ref('')

</script>
<template>
  <div class="w-1/2 flex flex-col gap-3 mb-10">
    <div class="flex flex-row w-full p-3 bg-white gap-2 rounded-2xl items-center">
        <img
        src="/search.svg"
        class="w-5 h-5"
        />
        <input
        v-model="search"
        type="text"
        placeholder="Search title"
        class="h-10 outline-0 text-2xl"
        />
    </div>

    <div class="w-full">
        <VDatePicker
        view="weekly"
        expanded
        v-model="selectedDate"
        class="w-full"
        />
    </div>
    
  </div>
</template>