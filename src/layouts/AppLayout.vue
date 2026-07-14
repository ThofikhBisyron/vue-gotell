<script setup lang="ts">
import NavbarApp from '@/components/navbar/NavbarApp.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
</script>
<template>
  <div class="min-h-screen flex flex-col bg-gray-200" >
    <NavbarApp/>
    <main class="flex flex-1">
        <!-- Sidebar -->
        <aside class="w-40">
          <Sidebar/>
        </aside>
        <!-- App -->
        <div class="flex-1 flex flex-col justify-center items-center">
            <slot />
        </div>
    </main>
  </div>
</template>