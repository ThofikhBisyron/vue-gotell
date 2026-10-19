<script setup lang="ts">
import { useToast } from '@/composables/useToast'

const { toast, hideToast } = useToast()
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-[-8px]"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="toast.visible"
      class="fixed right-5 top-5 z-100 flex w-[calc(100%-2.5rem)] max-w-sm items-start gap-3 rounded-xl border p-4 shadow-lg"
      :class="{
        'border-green-200 bg-green-50 text-green-800':
          toast.type === 'success',
        'border-red-200 bg-red-50 text-red-800':
          toast.type === 'error',
        'border-blue-200 bg-blue-50 text-blue-800':
          toast.type === 'info',
      }"
      role="status"
      aria-live="polite"
    >
      <span class="flex-1 text-sm font-medium">
        {{ toast.message }}
      </span>

      <button
        type="button"
        aria-label="Close notification"
        class="cursor-pointer opacity-70 hover:opacity-100"
        @click="hideToast"
      >
        ✕
      </button>
    </div>
  </Transition>
</template>