<script setup lang="ts">
import { ref } from 'vue';

const pin = ref(true)
</script>
<template>
  <div class="flex flex-col w-6/12">
    <div class="flex flex-row items-center justify-between mb-3">
      <RouterLink to="/settings" class="">
        <img src="/arrowleft.svg" alt="back" class="w-8 h-8 active:bg-gray-400">
      </RouterLink>
      <div class="">
          Security PIN
      </div>
      <div>

      </div>
    </div>
    <div class="flex flex-col gap-5 h-80 bg-white p-3 rounded-xl">
        <div class="flex justify-between">
            <div class="flex flex-col gap-2">
                <div class="text-gray-500">
                    Unlock using PIN
                </div>
                <div>
                    Unlock app using security PIN
                </div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
                <input
                v-model="pin"
                type="checkbox"
                class="sr-only peer"
                />
                <div 
                class="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-green-700">
                
                </div>
                <div 
                class="absolute left-1  w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-5">

                </div>
            </label>
        </div>
    </div>
  </div>
</template>