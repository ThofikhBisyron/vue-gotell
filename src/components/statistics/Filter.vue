<script setup lang="ts">
const activeTime = defineModel<'weekly' | 'monthly' | 'yearly'>({
  required: true,
})

const times = [
  { name: 'Weekly', value: 'weekly' },
  { name: 'Monthly', value: 'monthly' },
  { name: 'Yearly', value: 'yearly' },
] as const
</script>

<template>
  <div class="flex flex-row border-2 rounded-xl">
    <button
      v-for="time in times"
      :key="time.value"
      type="button"
      @click="activeTime = time.value"
      :class="[
        'cursor-pointer p-2 rounded-xl',
        activeTime === time.value
          ? 'bg-white shadow-2xl text-gray-600'
          : 'text-black'
      ]"
    >
      {{ time.name }}
    </button>
  </div>
</template>