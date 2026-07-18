<script setup lang="ts">
import { ref } from 'vue'

import AppLayout from '@/layouts/AppLayout.vue';
import SettingsList from '@/components/settings/SettingsList.vue';

import Personal from '@/components/settings/Personal.vue';

const currentPage = ref('')
</script>

<template>
    <AppLayout>
        <SettingsList v-model="currentPage"/>
        <Personal v-if="currentPage === 'personal'"/>
    </AppLayout>
</template>