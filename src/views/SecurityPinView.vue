<script setup lang="ts">
import SecurityPin from '@/components/auth/SecurityPin.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import Greeting from '@/components/Greeting.vue';
</script>

<template>
  <AuthLayout>

    <template #left>
      <Greeting/>
    </template>

    <template #right>
      <SecurityPin />
    </template>

  </AuthLayout>
</template>
