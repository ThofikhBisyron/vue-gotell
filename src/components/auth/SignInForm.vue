<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')


function handleLogin() {
  console.log('Login:', email.value)
  router.push('/otpverification')
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