<script setup lang="ts">

const currentPage = defineModel<string>()

</script>
<template>
  <div class="flex flex-col w-6/12">
    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-400 text-base">
            Account
        </div>
        <div class="flex flex-row justify-between">
            <button class="" @click="currentPage='personal'">
                Personal details
            </button>
            <img src="" alt="">
        </div>
    </div>

    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-400 text-base">
            Permissions
        </div>
        <div>
            <div>
                Notifications
            </div>
            <img src="" alt=""/>
        </div>
        <div>
            <div>
                Location settings
            </div>
            <img src="" alt="">
        </div>
    </div>

    <div class="bg-white p-3 rounded-2xl mb-5 flex flex-col gap-3">
        <div class="text-gray-400 text-base">
            Security
        </div>
        <div>
            <div>
                Face lock
            </div>
            <img src="" alt="">
        </div>
        <div>
            <div>
                Security PIN
            </div>
            <img src="" alt="">
        </div>
        <div>
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
            <div>
                Help
            </div>
            <img src="" alt="">
        </div>
        <div>
            <div class="text-center bg-red-400 rounded-2xl">
                Logout
            </div>
            <img src="" alt="">
        </div>
    </div>
    
  </div>
</template>