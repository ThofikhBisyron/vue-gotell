<script setup lang="ts">
import Otp from '@/components/auth/Otp.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import Greeting from '@/components/Greeting.vue';
</script>

<template>
  <AuthLayout>

    <template #left>
      <Greeting/>
    </template>

    <template #right>
      <Otp />
    </template>

  </AuthLayout>
</template>
