<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import Greeting from '@/components/dashboard/Greeting.vue';
import Recent from '@/components/dashboard/Recent.vue';
</script>

<template>
    <AppLayout>
        <Greeting/>
        <Recent/>
    </AppLayout>
</template>