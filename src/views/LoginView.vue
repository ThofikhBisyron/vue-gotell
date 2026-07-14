<script setup lang="ts">
import Auth from '../components/auth/Auth.vue'
import AuthLayout from '@/layouts/AuthLayout.vue';
import Greeting from '@/components/Greeting.vue';
</script>

<template>
  <AuthLayout>

    <template #left>
      <Greeting/>
    </template>

    <template #right>
      <Auth />
    </template>

  </AuthLayout>
</template>
