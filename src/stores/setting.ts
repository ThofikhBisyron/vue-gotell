import { apiFetch } from "@/utils/apiFetch"
import { defineStore } from "pinia"
import { ref } from "vue"

export interface Settings {
    id: number
    user_id: number
    memory_reminder: boolean
    location: boolean
    in_app_notifications: boolean
    created_at: string
    updated_at: string
}

export type UpdateSetting = Partial<
    Pick<
    Settings,
    'memory_reminder' | 'location' | 'in_app_notifications'
    >
>

export const useSettingStore = defineStore('setting', () => {
  const settings = ref<Settings | null>(null)
  const loading = ref(false)
  const updating = ref(false)
  const error = ref<string | null>(null)

  async function fetchSettings(force = false) {
    if (settings.value && !force) return

    loading.value = true
    error.value = null

    try {
      const response = await apiFetch('/settings/')

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to get settings')
      }

      settings.value = result.settings ?? result
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Something went wrong'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function updateSettings(payload: UpdateSetting) {
    if (!settings.value) {
      throw new Error('Settings have not been loaded')
    }

    updating.value = true
    error.value = null

    try {
      const response = await apiFetch('/settings/', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to update settings')
      }

      settings.value = result.settings
        ? result.settings
        : {
            ...settings.value,
            ...payload,
          }

      return settings.value
    } catch (err) {
      error.value = err instanceof Error
        ? err.message
        : 'Something went wrong'

      throw err
    } finally {
      updating.value = false
    }
  }

  function clearSettings() {
    settings.value = null
    error.value = null
  }

  return {
    settings,
    loading,
    updating,
    error,
    fetchSettings,
    updateSettings,
    clearSettings,
  }
})