<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin() {
  console.log('Login:', email.value, password.value)
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
        <div class="flex gap-1 bg-blue-500 p-3 rounded-xl text-white">
            <img 
            src="/fb.png" 
            alt="Facebook">
            <div>Continue with Facebook</div>
        </div>
        <div class="flex gap-1 bg-white text-black rounded-xl p-3">
            <img 
            src="/google.png" 
            alt="Google"
            >
            <div>Continue with Google</div>
        </div>
        <RouterLink to="signin">
            Or Use Email
        </RouterLink>
    </div>
</template>