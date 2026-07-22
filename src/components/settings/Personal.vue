<script setup lang="ts">
import { RouterLink } from 'vue-router';

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
    <div class="flex flex-col gap-5 bg-white p-3 rounded-xl">
      <div class="flex flex-col gap-2">
        <div class="text-gray-500">
          Name
        </div>
        <input
        class="h-10 border w-full rounded-xl pl-2"
        value="Edward"/>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-gray-500">
          Last Name
        </div>
        <input 
        class="h-10 border w-full rounded-xl pl-2"
        value="Jose"/>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-gray-500">
          Email
        </div>
        <input 
        class="h-10 border w-full rounded-xl pl-2"
        value="EdwardJose@email.com"/>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-gray-500">
          Phone Number
        </div>
        <input
        class="h-10 border w-full rounded-xl pl-2" 
        value="0888888888"/>
      </div>
      <button class="bg-black text-white p-3 rounded-xl cursor-pointer">
        Update
      </button>
    </div>
  </div>
</template>