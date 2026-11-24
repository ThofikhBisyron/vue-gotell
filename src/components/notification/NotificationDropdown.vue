<script setup lang="ts">
interface Notification {
  id: number
  type: string
  title: string
  message: string
  reference_id: number | null
  is_read: boolean
  created_at: string
}

defineProps<{
  notifications: Notification[]
  unreadCount: number
  loading: boolean
}>()

const emit = defineEmits<{
  close: []
  markRead: [id: number]
  markAllRead: []
  delete: [id: number]
}>()

function formatDate(date: string) {
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date))
}
</script>

<template>
  <div
    class="absolute right-5 top-12 z-50 w-80 sm:w-96
           rounded-xl border border-gray-200 bg-white
           shadow-xl overflow-hidden"
  >
    <!-- Header -->
    <div class="flex items-center justify-between p-4 border-b">
      <div>
        <h3 class="font-semibold text-gray-800">
          Notifications
        </h3>

        <p class="text-xs text-gray-500">
          {{ unreadCount }} unread notifications
        </p>
      </div>

      <button
        v-if="unreadCount > 0"
        type="button"
        @click="emit('markAllRead')"
        class="text-xs text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        Mark all as read
      </button>
    </div>

    <!-- Loading -->
    <div
      v-if="loading"
      class="p-8 text-center text-sm text-gray-500"
    >
      Loading notifications...
    </div>

    <!-- Empty -->
    <div
      v-else-if="notifications.length === 0"
      class="p-8 text-center"
    >
      <img
        src="/notification.svg"
        alt=""
        class="w-10 h-10 mx-auto opacity-30"
      />

      <p class="mt-3 text-sm text-gray-500">
        No notifications yet
      </p>
    </div>

    <!-- Notification List -->
    <div
      v-else
      class="max-h-96 overflow-y-auto divide-y"
    >
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="flex gap-3 p-4 transition hover:bg-gray-50"
        :class="notification.is_read ? 'bg-white' : 'bg-blue-50'"
      >
        <!-- Unread Indicator -->
        <div class="pt-1">
          <div
            class="w-2 h-2 rounded-full"
            :class="notification.is_read ? 'bg-transparent' : 'bg-blue-500'"
          />
        </div>

        <!-- Content -->
        <div class="flex-1 min-w-0">
          <button
            type="button"
            class="text-left w-full cursor-pointer"
            @click="!notification.is_read && emit('markRead', notification.id)"
          >
            <p class="text-sm font-semibold text-gray-800">
              {{ notification.title }}
            </p>

            <p class="text-sm text-gray-600 mt-1">
              {{ notification.message }}
            </p>

            <p class="text-xs text-gray-400 mt-2">
              {{ formatDate(notification.created_at) }}
            </p>
          </button>
        </div>

        <!-- Delete -->
        <button
          type="button"
          title="Delete notification"
          @click="emit('delete', notification.id)"
          class="self-start text-gray-400 hover:text-red-500 cursor-pointer"
        >
          <span class="text-lg">&times;</span>
        </button>
      </div>
    </div>

    <!-- Footer -->
    <div class="border-t p-3 text-center">
      <button
        type="button"
        @click="emit('close')"
        class="text-sm text-gray-500 hover:text-gray-800 cursor-pointer"
      >
        Close
      </button>
    </div>
  </div>
</template>