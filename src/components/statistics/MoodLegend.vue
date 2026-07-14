<script setup lang="ts">
import { ref } from 'vue';

const moods = [
    {
        name: 'Very Sad',
        icon: '/mood/verysad.svg',
        percent: 5,
        color: '#FCA5A5',
    },
    {
        name: 'Sad',
        icon: '/mood/sad.svg',
        percent: 15,
        color: '#FDBA74',
    },
    {
        name: 'Neutral',
        icon: '/mood/neutral.svg',
        percent: 20,
        color: '#FDE68A',
    },
    {
        name: 'Happy',
        icon: '/mood/happy.svg',
        percent: 25,
        color: '#67E8F9',
    },
    {
        name: 'Very Happy',
        icon: '/mood/veryhappy.svg',
        percent: 35,
        color: '#86EFAC',
    },
]

</script>

<template>
  <div class="flex justify-center gap-3 h-40">
    <div
    v-for="mood in moods"
    :key="mood.name"
    class="text-center">
    <div>
        <img
        :src=mood.icon
        :class="['w-10 p-1 rounded-2xl border-2']"
        :style="{backgroundColor: mood.color,}"
        />
    </div>
        <div>
            {{ mood.percent }}%
        </div>
    </div>
  </div>
</template>