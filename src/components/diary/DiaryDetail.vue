<script setup lang="ts">
import DiaryCard from './DiaryCard.vue';
import DiaryDatePicker from './DiaryDatePicker.vue';
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params.id)
const diarys = [
  { id : 1, 
    mood: 4, 
    date:"28 May 21", 
    title:"First day in work", 
    content:"Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus,Vivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibusVivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibusVivamus ornare metus ut interdum mollis. Donec hendrerit elit at faucibus"
},
]

const diary = diarys.find(
  diary => diary.id === Number(route.params.id)
)


</script>
<template>
  <div class="w-6/12">
    <DiaryDatePicker/>
    <DiaryCard
    v-if="diary"
    :diary="diary"/>
  </div>
</template>