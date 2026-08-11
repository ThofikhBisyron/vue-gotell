<script setup lang="ts">

import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLogout() {
    router.replace("/login")
}
</script>
<template>
  <div class="flex flex-col w-6/12">
    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-500 text-base">
            Account
        </div>
        <RouterLink class="flex flex-row justify-between" to="/settings/personaldetails">
            <div class="">
                Personal details
            </div>
            <img src="/settings/personal.svg" alt="personal" class="w-5 h-5">
        </RouterLink>
    </div>

    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-500 text-base">
            Permissions
        </div>
        <RouterLink class="flex flex-row justify-between" to="/settings/notifications">
            <div>
                Notifications
            </div>
            <img src="/settings/notification.svg" alt="notification" class="w-5 h-5"/>
        </RouterLink>
        <RouterLink class="flex flex-row justify-between" to="/settings/location">
            <div>
                Location settings
            </div>
            <img src="/settings/location.svg" alt="location" class="w-5 h-5"/>
        </RouterLink>
    </div>

    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-500 text-base">
            Security
        </div>
        <RouterLink class="flex flex-row justify-between" to="/settings/facelock">
            <div>
                Face lock
            </div>
            <img src="/settings/facelock.svg" alt="facelock" class="w-5 h-5"/>
        </RouterLink>
        <RouterLink class="flex flex-row justify-between" to="/settings/pinsetting">
            <div>
                Security PIN
            </div>
            <img src="/settings/pinsecurity.svg" alt="pinsecurity" class="w-5 h-5"/>
        </RouterLink>
        <div class="hidden">
            <div>
                Intruder selfie
            </div>
            <img src="/settings/intruderselfie.svg" alt="intruderselfie" class="w-5 h-5"/>
        </div>
    </div>

    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-500 text-base">
            Other
        </div>
        <RouterLink class="flex flex-row justify-between" to="/settings/help">
            <div>
                Help
            </div>
            <img src="/settings/help.svg" alt="help"  class="w-5 h-5"/>
        </RouterLink>
        <button @click="handleLogout" class="cursor-pointer">
            <div class="text-center bg-red-500 rounded-2xl p-3">
                Logout
            </div>
            <img src="" alt="">
        </button>
    </div>
    
  </div>
</template>