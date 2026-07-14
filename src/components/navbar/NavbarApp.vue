<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="flex flex-row justify-between items-center bg-gray-200 h-12 mr-2 ml-2">
        <div class="flex flex-row gap-1 justify-center items-center">
            <img
            src="/logo_gotell_diary.png"
            alt="Go Tell"
            class="w-10 h-10"/>
            <div>
                Diary
            </div>
        </div>
        <button class="cursor-pointer transition">
            <img
            src="/notification.svg"
            alt="Notification"
            class="w-6 h-6"/>
        </button>
    </div>
</template>