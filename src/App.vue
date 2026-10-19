<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ToastNotification from '@/components/notification/ToastNotification.vue'
</script>

<template>
  <RouterView />
  <ToastNotification />
</template>

<style scoped>
</style>
