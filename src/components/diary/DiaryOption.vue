<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps<{
  diaryId: number
}>()


</script>
<template>
  <div class="absolute flex flex-col gap-2 w-28 bg-white rounded-2xl p-2 top-5 right-11 shadow-2xl z-50">
    <RouterLink class="flex justify-between cursor-pointer" :to="`/edit-diary/${props.diaryId}`">
      <img src="/option/edit.svg"/>
      <div>
        Edit
      </div>
    </RouterLink>
    <button class="flex justify-between cursor-pointer">
      <img src="/option/delete.svg"/>
      <div>
        Delete
      </div>
    </button>
    <button class="flex justify-between cursor-pointer">
      <img src="/option/share.svg"/>
      <div>
        Share
      </div>
    </button>
  </div>
</template>