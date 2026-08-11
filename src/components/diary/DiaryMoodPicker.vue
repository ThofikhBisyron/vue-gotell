<script setup lang="ts">
const moods = [
  {name: "very Sad", icon:"/mood/verysad.svg", bg:"bg-rose-200", value: 1},
  {name: "Sad", icon:"/mood/sad.svg", bg:"bg-orange-200", value: 2},
  {name: "Neutral", icon:"/mood/neutral.svg", bg:"bg-yellow-200", value: 3},
  {name: "Happy", icon:"/mood/happy.svg", bg:"bg-cyan-200", value: 4},
  {name: "Very Happy", icon:"/mood/veryhappy.svg", bg:"bg-green-300", value: 5},
]

const selectedMood = defineModel<number | null>({
  default: null
})

</script>
<template>
  <div class="flex justify-center gap-10 items-center bg-white p-5 rounded-xl">
    <button 
    v-for="mood in moods"
    :key="mood.value"
    type="button"
    @click="selectedMood = mood.value"
    class="cursor-pointer"
    >
      <img 
      :src="mood.icon"
      :alt="mood.name"
      :class="[`w-10 py-3 px-1 rounded-2xl`, mood.bg, selectedMood === mood.value ? 'ring-1 ring-black scale-125' : '']"
      />
    </button>
  </div>
</template>