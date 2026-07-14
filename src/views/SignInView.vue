<script setup lang="ts">
import SigninForm from '@/components/auth/SignInForm.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import Greeting from '@/components/Greeting.vue';
</script>

<template>
  <AuthLayout>

    <template #left>
      <Greeting/>
    </template>

    <template #right>
      <SigninForm />
    </template>

  </AuthLayout>
</template>
