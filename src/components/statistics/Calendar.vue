<script setup lang="ts">
import { ref, watch } from 'vue'
import 'v-calendar/style.css'

const selectedDate = defineModel<Date>({
  required: true,
})

const isOpen = ref(false)

watch(selectedDate, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="relative flex justify-end">
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="cursor-pointer"
    >
      <img
        src="/calendar.svg"
        class="w-6 h-6"
        alt="Select date"
      />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 top-9 z-50 rounded-xl bg-white shadow-xl"
    >
      <VDatePicker
        v-model="selectedDate"
        mode="date"
        :max-date="new Date()"
      />
    </div>
  </div>
</template>