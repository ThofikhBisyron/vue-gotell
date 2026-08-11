<script setup lang="ts">
import { valueOrDefault } from 'chart.js/helpers'
import { computed, ref } from 'vue'

const selectedDate = defineModel<Date>({
  default: () => new Date()
})

const showCalendar = ref(false)

const isToday = computed(() => {
  const today = new Date()

  return selectedDate.value.toDateString() === today.toDateString()
})

const formattedDate = computed(() => {
  if (isToday.value) {
    return 'Today'
  }

  return selectedDate.value.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
})

const changeDate = (days: number) => {
  const date = new Date(selectedDate.value)
  date.setDate(date.getDate() + days)
  selectedDate.value = date
}

</script>
<template>
  <div class="relative mb-3">
    <div class="flex bg-white rounded-xl items-center gap-80 justify-between p-2">
      <button
      type="button"
      @click="changeDate(-1)"
      class="cursor-pointer">
      <
      </button>

      <button
      type="button"
      @click="showCalendar = !showCalendar"
      class="flex item-center gap-2 cursor-pointer"
      >
      <img
      src="/calendar.svg"
      class="w-5 h-5"/>
      <div>
        {{ formattedDate }}
      </div>        
      </button>

      <button
      type="button"
      @click="changeDate(1)"
      class="cursor-pointer">
        >
      </button>
    </div>

    <div
    v-if="showCalendar"
    class="absolute top-12 left-50 z-50 bg-white rounded-xl shadow-2xl p-2">
    <VDatePicker
    v-model="selectedDate"
    @update:model-value="showCalendar = false"/>
    </div>
  </div>
</template>