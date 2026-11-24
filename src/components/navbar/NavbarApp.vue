<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NotificationDropdown from '@/components/notification/NotificationDropdown.vue'
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()

const isNotificationOpen = ref(false)

onMounted(() => {
  notificationStore.fetchNotificationData().catch((error) => {
    console.error('Failed to fetch notifications:', error)
  })
})

async function handleMarkRead(id: number) {
  try {
    await notificationStore.markAsRead(id)
  } catch (error) {
    console.error('Failed to mark notification as read:', error)
  }
}

async function handleMarkAllRead() {
  try {
    await notificationStore.markAllAsRead()
  } catch (error) {
    console.error('Failed to mark all notifications as read:', error)
  }
}

async function handleDelete(id: number) {
  try {
    await notificationStore.deleteNotification(id)
  } catch (error) {
    console.error('Failed to delete notification:', error)
  }
}
</script>

<template>
    <div class="flex flex-row justify-between items-center bg-gray-200 h-12 mr-2 ml-2">
        <div class="flex flex-row gap-1 justify-center items-center">
            <img
            src="/logo_gotell_diary.png"
            alt="Go Tell"
            class="w-10 h-10"/>
            <div>
                Diary
            </div>
        </div>
        <div class="relative">
            <button
                type="button"
                @click="isNotificationOpen = !isNotificationOpen"
                class="relative cursor-pointer transition"
            >
                <img
                src="/notification.svg"
                alt="Notification"
                class="w-6 h-6"
                />

                <!-- Unread Badge -->
                <div
                v-if="notificationStore.unreadCount > 0"
                class="absolute -top-2 -right-2 min-w-5 h-5 px-1
                        flex items-center justify-center rounded-full
                        bg-red-500 text-white text-xs"
                >
                {{ notificationStore.unreadCount > 99
                    ? '99+'
                    : notificationStore.unreadCount }}
                </div>
            </button>

            <!-- Dropdown -->
            <NotificationDropdown
                v-if="isNotificationOpen"
                :notifications="notificationStore.notifications"
                :unread-count="notificationStore.unreadCount"
                :loading="notificationStore.loading"
                @close="isNotificationOpen = false"
                @mark-read="handleMarkRead"
                @mark-all-read="handleMarkAllRead"
                @delete="handleDelete"
            />
        </div>

    </div>
</template>