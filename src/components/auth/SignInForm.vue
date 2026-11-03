<script setup lang="ts">
import { apiFetch } from '@/utils/apiFetch'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from '@/composables/useToast'

const router = useRouter()

const { showToast } = useToast()

const email = ref('')


async function handleLogin() {
  try{
    const response = await apiFetch('/auth/email/request', {
        method : "POST",
        headers: {
        'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            email : email,
        })
    })

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.message || 'failed to sign in with email')
    }
    router.push({
        name: '/otpverification',
        state: {email: email.value}
    })

  }catch (err) {
    showToast(
        err instanceof Error ? err.message : 'Something went wrong',
        'error'
    )
  }finally {

  }
  
}
</script>

<template>
    <div>
        <div class="text-2xl font-semibold">
          Let's get started!!   
        </div>
        <div>
            Input your Email Address 
        </div>
    </div>
    <div class="flex flex-col gap-1">
        <label class="text-left">
            Email
        </label>
        <input
        v-model="email"
        type="email"
        placeholder="example@email.com"
        class="bg-gray-200 w-60 h-10 p-2 rounded-xl"
        />
    </div>
    <button 
    @click="handleLogin"
    class="w-40 h-10 bg-purple-400 rounded-4xl hover:bg-purple-500 text-white"
    >
    Continue
    </button>
</template>