<script setup lang="ts">
defineProps<{
  show: boolean
  title: string
  message: string
  confirmText?: string
  loading?: boolean
}>()

const emit = defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-4"
        @click.self="emit('cancel')"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
          role="dialog"
          aria-modal="true"
          :aria-label="title"
        >
          <div class="mb-4 flex items-center gap-3">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-600"
            >
              <span class="text-xl">!</span>
            </div>

            <h2 class="text-lg font-semibold text-gray-900">
              {{ title }}
            </h2>
          </div>

          <p class="mb-6 text-sm leading-6 text-gray-600">
            {{ message }}
          </p>

          <div class="flex justify-end gap-3">
            <button
              type="button"
              class="rounded-xl border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
              :disabled="loading"
              @click="emit('cancel')"
            >
              Cancel
            </button>

            <button
              type="button"
              class="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
              :disabled="loading"
              @click="emit('confirm')"
            >
              {{ loading ? 'Disconnecting...' : (confirmText || 'Disconnect') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
```