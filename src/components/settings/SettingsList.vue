<script setup lang="ts">

import { RouterLink } from 'vue-router';

</script>
<template>
  <div class="flex flex-col w-6/12">
    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-500 text-base">
            Account
        </div>
        <div class="flex flex-row justify-between">
            <RouterLink to="/settings/personaldetails" class="">
                Personal details
            </RouterLink>
            <img src="/settings/personal.svg" alt="personal" class="w-5 h-5">
        </div>
    </div>

    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-500 text-base">
            Permissions
        </div>
        <div class="flex flex-row justify-between">
            <RouterLink to="/settings/notifications">
                Notifications
            </RouterLink>
            <img src="/settings/notification.svg" alt="notification" class="w-5 h-5"/>
        </div>
        <div class="flex flex-row justify-between">
            <RouterLink to="/settings/location">
                Location settings
            </RouterLink>
            <img src="/settings/location.svg" alt="location" class="w-5 h-5"/>
        </div>
    </div>

    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-500 text-base">
            Security
        </div>
        <div class="flex flex-row justify-between">
            <RouterLink to="/settings/facelock">
                Face lock
            </RouterLink>
            <img src="/settings/facelock.svg" alt="facelock" class="w-5 h-5"/>
        </div>
        <div class="flex flex-row justify-between">
            <RouterLink to="/settings/pinsetting">
                Security PIN
            </RouterLink>
            <img src="/settings/pinsecurity.svg" alt="pinsecurity" class="w-5 h-5"/>
        </div>
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
        <div class="flex flex-row justify-between">
            <RouterLink to="/settings/help">
                Help
            </RouterLink>
            <img src="/settings/help.svg" alt="help"  class="w-5 h-5"/>
        </div>
        <div>
            <div class="text-center bg-red-500 rounded-2xl p-3">
                Logout
            </div>
            <img src="" alt="">
        </div>
    </div>
    
  </div>
</template>