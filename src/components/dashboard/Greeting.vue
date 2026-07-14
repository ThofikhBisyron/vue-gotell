<script setup lang="ts">

const moods = [
  {name: "very Sad", icon:"/mood/verysad.svg", bg:"bg-rose-200"},
  {name: "Sad", icon:"/mood/sad.svg", bg:"bg-orange-200"},
  {name: "Neutral", icon:"/mood/neutral.svg", bg:"bg-yellow-200 "},
  {name: "Happy", icon:"/mood/happy.svg", bg:"bg-cyan-200"},
  {name: "Very Happy", icon:"/mood/veryhappy.svg", bg:"bg-green-300"},
]
</script>
<template>
  <div class="flex flex-col gap-3 text-center mb-10">
    <div class="text-gray-500 text-xl italic">Hello, John Doe</div>
    <div class="text-2xl font-semibold">How are you doing today ?</div>
    <div class="flex gap-5">
      <img
      v-for="mood in moods"
      :src="mood.icon"
      :alt="mood.name"
      :class="`w-20 ${mood.bg} py-10 px-2`"
      />
    </div>
  </div>
</template>