<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import type { Diary } from '@/types/diary.ts'; 
import { ref } from 'vue';
import { useToast } from '@/composables/useToast';
import { apiFetch } from '@/utils/apiFetch';
import ConfirmModal from '../notification/ConfirmModal.vue';

const props = defineProps<{
  diaryId: number
}>()

const router = useRouter()
const { showToast } = useToast()

const showDeleteModal = ref(false)
const deleteLoading = ref(false)

const openDeleteModal = () => {
  showDeleteModal.value = true
}

const confirmDelete = async () => {
  if (deleteLoading.value) return

  deleteLoading.value = true

  try{
    const response = await apiFetch(`/diary/${props.diaryId}`, {
      method: "DELETE"
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'failed to delete diary')
    }

    showDeleteModal.value = false

    showToast(
      result.message || 'Diary deleted successfully',
      'success',
    )

    router.push('/diary')
  }catch (err) {
    showToast(
      err instanceof Error ? err.message : 'Something went wrong',
      'error',
    )
  } finally {
    deleteLoading.value = false
  }
}

const shareDiary = async () => {
  const shareUrl = `${window.location.origin}/diary/${props.diaryId}`

  try {
    if (navigator.share) {
      await navigator.share({
        title: 'My Diary',
        url: shareUrl,
      })
    } else {
      await navigator.clipboard.writeText(shareUrl)
      showToast('Diary link copied successfully', 'success')
    }
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') return

    showToast('Failed to share diary link', 'error')
  }
}


</script>
<template>
  <div class="absolute flex flex-col gap-2 w-28 bg-white rounded-2xl p-2 top-5 right-11 shadow-2xl z-50">
    <RouterLink class="flex justify-between cursor-pointer" :to="`/edit-diary/${props.diaryId}`">
      <img src="/option/edit.svg"/>
      <div>
        Edit
      </div>
    </RouterLink>

    <button 
    type="button"
    class="flex justify-between cursor-pointer"
    @click="openDeleteModal"
    >
      <img src="/option/delete.svg" alt=""/>
      <div>
        Delete
      </div>
    </button>

    <button 
    type="button"
    class="flex justify-between cursor-pointer"
    @click="shareDiary"
    >
      <img src="/option/share.svg"/>
      <div>
        Share
      </div>
    </button>
  </div>
    <ConfirmModal
    :show="showDeleteModal"
    title="Delete Diary?"
    message="Are you sure you want to delete this diary? This action cannot be undone."
    confirm-text="Delete"
    :loading="deleteLoading"
    @confirm="confirmDelete"
    @cancel="showDeleteModal = false"
  />
</template>