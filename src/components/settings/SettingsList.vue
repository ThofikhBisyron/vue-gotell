<script setup lang="ts">

import { RouterLink } from 'vue-router';

</script>
<template>
  <div class="flex flex-col w-6/12">
    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-400 text-base">
            Account
        </div>
        <div class="flex flex-row justify-between">
            <RouterLink to="/settings/personaldetails" class="">
                Personal details
            </RouterLink>
            <img src="" alt="">
        </div>
    </div>

    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-400 text-base">
            Permissions
        </div>
        <div>
            <RouterLink to="/settings/notifications">
                Notifications
            </RouterLink>
            <img src="" alt=""/>
        </div>
        <div>
            <RouterLink to="/settings/location">
                Location settings
            </RouterLink>
            <img src="" alt="">
        </div>
    </div>

    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-400 text-base">
            Security
        </div>
        <div>
            <RouterLink to="/settings/facelock">
                Face lock
            </RouterLink>
            <img src="" alt="">
        </div>
        <div>
            <RouterLink to="/settings/pinsetting">
                Security PIN
            </RouterLink>
            <img src="" alt="">
        </div>
        <div class="hidden">
            <div>
                Intruder selfie
            </div>
            <img src="" alt="">
        </div>
    </div>

    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-400 text-base">
            Other
        </div>
        <div>
            <RouterLink to="/settings/help">
                Help
            </RouterLink>
            <img src="" alt="">
        </div>
        <div>
            <div class="text-center bg-red-400 rounded-2xl p-3">
                Logout
            </div>
            <img src="" alt="">
        </div>
    </div>
    
  </div>
</template>