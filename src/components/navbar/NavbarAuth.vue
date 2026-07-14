<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="flex flex-row justify-between items-center bg-white h-12 mr-2 ml-2">
        <img
        src="/logo_gotell_diary.png"
        alt="Go Tell"
        class="w-10 h-10"/>
        <div class="flex flex-row gap-2">
            <RouterLink
            to="/">
            Home
            </RouterLink>

            <RouterLink
            to="/about">
            About
            </RouterLink>
        </div>
    </div>
</template>