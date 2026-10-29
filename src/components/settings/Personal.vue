<script setup lang="ts">
import { useToast } from '@/composables/useToast';
import { useProfileStore } from '@/stores/profile';
import ConfirmModal from '@/components/notification/ConfirmModal.vue'
import { onMounted, reactive, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { apiFetch } from '@/utils/apiFetch';

const ApiUrl = import.meta.env.VITE_API_URL
const loading = ref(true)
const profileStore = useProfileStore()
const  { showToast } = useToast()

const form = reactive({
  first_name: '',
  last_name: '',
  email_user: '',
  phone_number: '',
})

const providerToUnlink = ref<'google' | 'facebook' | null>(null)
const unlinkLoading = ref(false)

watch(
  () => profileStore.profile,
  (profile) => {
    if (!profile) return

    form.first_name = profile.first_name ?? ''
    form.last_name = profile.last_name ?? ''
    form.phone_number = profile.phone_number ?? ''
    form.email_user = profile.email_user ?? ''
    },
    {immediate: true}
)

onMounted(async() => {
  try{
    await profileStore.fetchProfile()
  }catch (err) {
    showToast(
      err instanceof Error ? err.message : 'Failed to load profile',
      'error',
  )
  }
})

const linkGoogle = () => {
  window.location.href = `${ApiUrl}/auth/google/connect`
}

const linkFacebook = () => {
  window.location.href = `${ApiUrl}/auth/facebook/connect`
}

const openUnlinkModal = (provider: 'google' | 'facebook') => {
  providerToUnlink.value = provider
}

const confirmUnlink = async () => {
  const provider = providerToUnlink.value

  if (!provider || unlinkLoading.value) return

  unlinkLoading.value = true

  try{
    const response = await apiFetch(`/auth/${provider}/connect`, {
      method: 'DELETE',
      credentials: 'include',
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(
        result.message || `Failed to disconnect ${provider}`,
      )
    }

    await profileStore.fetchProfile(true)

    showToast(
      result.message || `${provider} account disconnected successfully`,
      'success',
    )
    providerToUnlink.value = null
  }catch (err){
    showToast(
      err instanceof Error ? err.message : 'Something went wrong', 'error',
    )
  } finally {
    unlinkLoading.value = false
  }
}

const updateProfile = async () => {
  try{
    const response = await apiFetch(`/profile`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        first_name: form.first_name,
        last_name: form.last_name,
        phone_number: form.phone_number,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Failed to update profile')
    }

    await profileStore.fetchProfile(true)

    showToast(
      result.message || 'Profile updated successfully',
      'success',
    )
  } catch (err) {
    showToast(
      err instanceof Error ? err.message : 'Something went wrong',
      'error',
    )
  }
}

</script>

<template>
  <div class="flex flex-col w-6/12">
    <div class="flex flex-row items-center justify-between mb-3">
      <RouterLink to="/settings" class="">
        <img src="/arrowleft.svg" alt="back" class="w-8 h-8 active:bg-gray-400">
      </RouterLink>
      <div class="">
          Personal Details 
      </div>
      <div>

      </div>
    </div>
    <div class="flex flex-col gap-3 bg-white p-3 rounded-xl">
      <div class="flex flex-col gap-2">
        <label for="first_name" class="text-gray-500">
          First Name
        </label>
        <div
        v-if="profileStore.loading"
        class="h-10 w-full rounded-xl bg-gray-200 animate-pulse"
        ></div>
        <input
        v-else
        class="h-10 border w-full rounded-xl pl-2 content-center"
        v-model="form.first_name"
        id="first_name"/>
      </div>

      <div class="flex flex-col gap-2">
        <label for="last_name" class="text-gray-500">
          Last Name
        </label>
        <div
        v-if="profileStore.loading"
        class="h-10 w-full rounded-xl bg-gray-200 animate-pulse"
        ></div>
        <input 
        v-else
        class="h-10 border w-full rounded-xl pl-2 content-center"
        v-model="form.last_name"
        id="last_name"/>
      </div>

      <div class="flex flex-col gap-2">
        <div class="text-gray-500">
          Primary Email
        </div>
        <div
        v-if="profileStore.loading"
        class="h-10 w-full rounded-xl bg-gray-200 animate-pulse"
        ></div>
        <div 
        v-else
        class="h-10 border w-full rounded-xl pl-2 bg-gray-200 content-center">
        {{ form.email_user }}
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label for="phone_number" class="text-gray-500">
          Phone Number
        </label>
        <div
        v-if="profileStore.loading"
        class="h-10 w-full rounded-xl bg-gray-200 animate-pulse"
        ></div>
        <input
        v-else
        class="h-10 border w-full rounded-xl pl-2 content-center" 
        v-model="form.phone_number"
        id="phone_number"/>
      </div>

      <div v-if="profileStore.loading" class="flex flex-col gap-3">
        <div class="h-10 w-full rounded-xl bg-gray-200 animate-pulse"></div>
        <div class="h-10 w-full rounded-xl bg-gray-200 animate-pulse"></div>
      </div>

      <div v-else class="flex flex-col">
        <button v-if="!profileStore.profile?.email_google"
          class="flex gap-3 p-1 cursor-pointer justify-center items-center" 
          @click="linkGoogle"
          >
          <img 
          src="/google.png" 
          alt="Google">
          <div>Link Google Account</div>
        </button>
        <div v-else
          class="flex gap-3 p-1 items-center justify-between"
          >
          <div class="flex items-center gap-2">
            <img src="/google.png" alt="Google">
            <div>
              {{ profileStore.profile.email_google }}
            </div>
          </div>
          <button 
          class="cursor-pointer border-1 p-1 bg-gray-200 rounded-full hover:bg-white"
          @click="openUnlinkModal('google')"
          >
            Unlink
          </button>
        </div>

        <button v-if="!profileStore.profile?.email_facebook"
          class="flex gap-3 p-1 cursor-pointer justify-center items-center hover:bg-blue-600/95 rounded-xl"
          @click="linkFacebook"
          >
          <img class="w-10 h-10"
          src="/facebook.png" 
          alt="Facebook">
          <div>Link Facebook Account</div>
        </button>
        <div v-else
          class="flex gap-3 p-1 items-center justify-between"
          >
          <div class="flex items-center gap-2">
            <img src="/google.png" alt="Google">
            <div>
              {{ profileStore.profile.email_facebook }}
            </div>
          </div>
          <button 
          class="cursor-pointer border-1 p-1 bg-gray-200 rounded-full hover:bg-white"
          @click="openUnlinkModal('facebook')"
          >
            Unlink
          </button>
        </div>
      </div>

      <button 
      class="bg-black text-white p-3 rounded-xl cursor-pointer"
      @click="updateProfile"
      >
        Update
      </button>
    </div>
  </div>
    <ConfirmModal
    :show="providerToUnlink !== null"
    :title="`Disconnect ${providerToUnlink === 'google' ? 'Google' : 'Facebook'}?`"
    :message="`Are you sure you want to disconnect your ${providerToUnlink} account? You can connect it again later.`"
    confirm-text="Disconnect"
    :loading="unlinkLoading"
    @confirm="confirmUnlink"
    @cancel="providerToUnlink = null"
  />
</template>