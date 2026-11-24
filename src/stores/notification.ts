import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiFetch } from '@/utils/apiFetch'

export interface Notification {
  id: number
  user_id: number
  type: string
  title: string
  message: string
  reference_id: number | null
  is_read: boolean
  created_at: string
}

interface NotificationResponse {
  notifications: Notification[]
  limit: number
  offset: number
}

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<Notification[]>([])
  const unreadCount = ref(0)

  const loading = ref(false)
  const error = ref<string | null>(null)

  // Mengambil daftar notifikasi
  async function fetchNotifications(
    limit = 20,
    offset = 0,
  ) {
    const response = await apiFetch(
      `/notifications?limit=${limit}&offset=${offset}`,
    )

    if (!response.ok) {
      throw new Error('Failed to get notifications')
    }

    const result = await response.json() as NotificationResponse

    notifications.value = result.notifications
  }

  async function fetchUnreadCount() {
    const response = await apiFetch('/notifications/unread/count')

    if (!response.ok) {
      throw new Error('Failed to get unread count')
    }

    const result = await response.json() as {
      unread_count: number
    }

    unreadCount.value = result.unread_count
  }

  async function fetchNotificationData() {
    loading.value = true
    error.value = null

    try {
      await Promise.all([
        fetchNotifications(),
        fetchUnreadCount(),
      ])
    } catch (err) {
      error.value = 'Failed to load notifications'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function markAsRead(id: number) {
    const response = await apiFetch(`/notifications/${id}/read`, {
      method: 'PATCH',
    })

    if (!response.ok) {
      throw new Error('Failed to mark notification as read')
    }

    const notification = notifications.value.find(
      (item) => item.id === id,
    )

    if (notification && !notification.is_read) {
      notification.is_read = true
      unreadCount.value = Math.max(0, unreadCount.value - 1)
    }
  }

  async function markAllAsRead() {
    const response = await apiFetch('/notifications/read-all', {
      method: 'PATCH',
    })

    if (!response.ok) {
      throw new Error('Failed to mark all notifications as read')
    }

    notifications.value = notifications.value.map((item) => ({
      ...item,
      is_read: true,
    }))

    unreadCount.value = 0
  }

  async function deleteNotification(id: number) {
    const response = await apiFetch(`/notifications/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Failed to delete notification')
    }

    const notification = notifications.value.find(
      (item) => item.id === id,
    )

    if (notification && !notification.is_read) {
      unreadCount.value = Math.max(0, unreadCount.value - 1)
    }

    notifications.value = notifications.value.filter(
      (item) => item.id !== id,
    )
  }

  return {
    notifications,
    unreadCount,
    loading,
    error,
    fetchNotifications,
    fetchUnreadCount,
    fetchNotificationData,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  }
})