<script setup lang="ts">
import { ref } from 'vue';


const selectedDate = defineModel<Date | null>('selectedDate', {
  required: true,
})

const search = defineModel<string>('search', {
  required: true,
})

const emit = defineEmits<{
  'update:month-year': [value: { year: number; month: number }]
}>()

const handleMonthYear = (pages: any[]) => {

  const page = pages?.[0]
  if (!page) return

  emit('update:month-year', {
    year: page.year,
    month: page.month,
  })
}

</script>
<template>
  <div class="w-1/2 flex flex-col gap-3 mb-10">
    <div class="flex flex-row w-full p-3 bg-white gap-2 rounded-2xl items-center">
        <img
        src="/search.svg"
        class="w-5 h-5"
        alt=""
        />
        <input
        v-model="search"
        type="text"
        placeholder="Search title"
        class="h-10 outline-0 text-2xl"
        />
    </div>

    <div class="w-full">
        <VDatePicker
        view="weekly"
        expanded
        v-model="selectedDate"
        @did-move="handleMonthYear"
        class="w-full"
        />
    </div>
    
  </div>
</template>