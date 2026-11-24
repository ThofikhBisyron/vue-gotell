import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiFetch } from '@/utils/apiFetch'

export interface DiaryActivity {
  label: string
  total: number
}

export interface Statistics {
  period: 'weekly' | 'monthly' | 'yearly'
  start_date: string
  end_date: string
  total_diary: number
  mood_counts: Record<string, number>
  activity: DiaryActivity[]
}

export const useStatisticStore = defineStore('statistic', () => {
  const statistics = ref<Statistics | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchStatistics(
    period: 'weekly' | 'monthly' | 'yearly',
    date: string,
  ) {
    loading.value = true
    error.value = null

    try {
      const response = await apiFetch(
        `/statistics?period=${period}&date=${date}`,
      )

      statistics.value = await response.json() as Statistics
    } catch (err) {
      error.value = 'Failed to get statistics'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    statistics,
    loading,
    error,
    fetchStatistics,
  }
})