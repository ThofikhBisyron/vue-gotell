<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useSettingStore } from '@/stores/setting'
import { useToast } from '@/composables/useToast'

const settingStore = useSettingStore()
const { showToast } = useToast()

onMounted(async () => {
  try {
    await settingStore.fetchSettings()
  } catch (err) {

  }
})

// Memory Reminder
const memoryReminder = computed({
  get: () => settingStore.settings?.memory_reminder ?? false,

  set: async (value: boolean) => {
    try {
      await settingStore.updateSettings({
        memory_reminder: value,
      })
    } catch (err) {
      showToast(
        err instanceof Error ? err.message : 'Failed to update memory reminder',
        'error',
      )
    }
  },
})

// In-app Notifications
const inAppNotifications = computed({
  get: () => settingStore.settings?.in_app_notifications ?? false,

  set: async (value: boolean) => {
    try {
      await settingStore.updateSettings({
        in_app_notifications: value,
      })
    } catch (err) {
      showToast(
        err instanceof Error ? err.message : 'Failed to update notifications',
        'error',
      )
    }
  },
})
</script>
<template>
  <div class="flex flex-col w-6/12">
    <div class="flex flex-row items-center justify-between mb-3">
      <RouterLink to="/settings" class="">
        <img src="/arrowleft.svg" alt="back" class="w-8 h-8 active:bg-gray-400">
      </RouterLink>
      <div class="">
          Notifications
      </div>
      <div>

      </div>
    </div>
    <div class="flex flex-col gap-5 h-80 bg-white p-3 rounded-xl">
        <div class="flex justify-between">
            <div class="flex flex-col gap-2">
                <div class="text-gray-500">
                    Memory Reminder
                </div>
                <div>
                    Remind me to add daily memories
                </div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
                <input
                v-model="memoryReminder"
                type="checkbox"
                class="sr-only peer"
                :disabled="settingStore.loading || settingStore.updating"
                />
                <div 
                class="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-green-700">
                
                </div>
                <div 
                class="absolute left-1  w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-5">

                </div>
            </label>
        </div>
        <div class="flex justify-between">
            <div class="flex flex-col gap-2">
                <div class="text-gray-500">
                    In-app Notifications
                </div>
                <div>
                    Receive notifications about your diary activities
                </div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
                <input
                v-model="inAppNotifications"
                type="checkbox"
                class="sr-only peer"
                :disabled="settingStore.loading || settingStore.updating"
                />
                <div 
                class="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-green-700">
                
                </div>
                <div 
                class="absolute left-1  w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-5">

                </div>
            </label>
        </div>
    </div>
  </div>
</template>