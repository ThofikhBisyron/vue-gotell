<script setup lang="ts">
import { ref } from 'vue';
const times = [
{name: 'Weekly'},
{name: 'Monthly'},
{name: 'Yearly'},
]

const activeTime = ref('Weekly')
</script>

<template>
  <div
  class="flex flex-row border-2 rounded-xl"
  >
    <button 
    v-for="time in times" 
    :key="time.name"
    @click="activeTime = time.name"
    :class="['cursor-pointer p-2 rounded-xl', activeTime === time.name ? 'bg-white shadow-2xl text-gray-600' : 'text-black']">
      {{time.name}}
    </button>
  </div>
</template>