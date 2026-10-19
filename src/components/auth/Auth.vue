<script setup lang="ts">
import { ref } from 'vue'

const ApiUrl = import.meta.env.VITE_API_URL

const email = ref('')
const password = ref('')

function googleLogin() {
  window.location.href = `${ApiUrl}/auth/google`
}

function facebookLogin() {
    window.location.href = `${ApiUrl}/auth/facebook`
}


</script>

<template>
    <div>
        <div class="">
          Let's get started!!   
        </div>
        <div>
            Input your Email Address & Password
        </div>
    </div>
    <div class="flex flex-col gap-3">
        <button class="flex gap-1 hover:bg-blue-600/95 p-3 rounded-xl text-black hover:text-white items-center cursor-pointer"
        type="button"
        @click="facebookLogin"
        >
            <img
            class="w-10 h-10"
            src="/facebook.png" 
            alt="Facebook">
            <div>Continue with Facebook</div>
        </button>
        <button class="flex gap-1 hover:bg-white text-black rounded-xl p-3 items-center cursor-pointer"
        type="button"
        @click="googleLogin"
        >
            <img 
            class="w-10 h-10"
            src="/google.png" 
            alt="Google"
            >
            <div>Continue with Google</div>
        </button>
        <RouterLink to="signin" class="hover:bg-gray-500 hover:text-white rounded-xl p-3">
            Or Use Email
        </RouterLink>
    </div>
</template>