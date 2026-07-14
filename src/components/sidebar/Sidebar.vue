<script setup lang="ts">
import { RouterLink } from 'vue-router';

const menus = [
  { name: 'Home', icon: '/sidebar/home.svg', to: '/'},
  { name: 'Statistics', icon: '/sidebar/mood.svg', to: '/statistics'},
  { name: 'Diary', icon: '/sidebar/diary.svg', to: '/diary'},
  { name: 'Settings', icon: '/sidebar/settings.svg', to: '/settings'},
  { name: 'Add', icon: '/sidebar/adddiary.svg', to: '/addmemories'},
]

</script>

<template>
  <div class="pl-2 flex flex-col gap-2">
    <RouterLink 
    v-for="menu in menus"
    :key="menu.name"
    :to="menu.to"
    class="flex gap-3 cursor-pointer transition items-center hover:bg-gray-400 active:bg-gray-400"
    active-class="bg-purple-500 text-white shadow-md"
    >
      <img 
      :src="menu.icon" 
      :alt="menu.name"
      class="w-6 h-6 active:bg-purple-400"/>
      <div>
        {{ menu.name }}
      </div>
    </RouterLink>
  </div>
</template>