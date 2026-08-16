<script setup lang="ts">
import DiaryOption from './DiaryOption.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router';

const router = useRouter()

interface Diary {
  id: number
  mood: string
  date: string
  title: string
  content: string
}

const props = defineProps<{
  diary: Diary
  compact?: boolean
}>()


const activeMenu = ref<number | null>(null)
const toggleMenu = (id: number) => {
  activeMenu.value = activeMenu.value === id ? null : id
}
const goToDiary = () => {
  router.push(`/diary/${props.diary.id}`)
}
</script>
<template>
    <div class="relative bg-white p-5 rounded-xl flex flex-col gap-2">
      <div class="flex justify-between">
        <img
        :src="diary.mood"
        class="w-10 h-10"
        /> 
        <button @click.prevent.stop="toggleMenu(diary.id)"
        class="relative cursor-pointer hover:bg-gray-200 rounded-4xl">
          <img
          src="/option.svg"
          />
        </button>
        <Transition name="menu"
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 scale-95 -translate-y-2"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-150 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 -translate-y-2">
          <DiaryOption
          v-if="activeMenu === diary.id"/>
        </Transition>
      </div>
      <RouterLink 
      :to="`/diary/${diary.id}`"
      class="block rounded-2xl p-3 transition-colors duration-200 hover:bg-yellow-100">
        <div class="w-fit p-1 bg-blue-200">
          {{ diary.date }}
        </div>
        <div>
          {{ diary.title }}
        </div>
        <div 
        :class="compact ? 'line-clamp-1' : ''">
          {{ diary.content }}
        </div>
      </RouterLink>
    </div>
</template>