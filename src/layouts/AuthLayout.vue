<script setup lang="ts">
import NavbarAuth from '@/components/navbar/NavbarAuth.vue';
</script>
<template>
  <div class="min-h-screen flex flex-col" >
    <NavbarAuth/>
    <main class="flex flex-1">
        <!-- Greeting -->
        <div class="w-2/3 flex flex-col justify-center items-center">
            <slot name="left" />
        </div>
        <!-- Login -->
        <div class="w-1/3 flex flex-col justify-center items-center text-center gap-8">
            <slot name="right" />
        </div>
    </main>
  </div>
</template>