<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const pin = ref(['', '', '', ''])

function handleKeydown(event: KeyboardEvent, index: number) {
  const target = event.target as HTMLInputElement

  // kalau backspace & kosong
  if (
    event.key === 'Backspace' &&
    !target.value &&
    index > 0
  ) {
    const prevInput = document.getElementById(
      `pin-${index - 1}`
    ) as HTMLInputElement

    prevInput?.focus()
  }
}

function handleInput(event: Event, index: number) {
  const target = event.target as HTMLInputElement

  // hanya angka
  target.value = target.value.replace(/\D/g, '')

  pin.value[index] = target.value

  // auto next
  if (target.value && index < pin.value.length - 1) {
    const nextInput = document.getElementById(
      `pin-${index + 1}`
    ) as HTMLInputElement

    nextInput?.focus()
  }
}


function handleLogin() {
  console.log(pin.value.join(''))
  router.replace("/dashboard")
}
</script>

<template>
    <div>
        <div class="text-2xl font-semibold">
          Add Security Pin 
        </div>
        <div>
            Secure your login with Pin Code
        </div>
    </div>
    <div class="flex flex-col gap-1">
        <label class="text-left">
            Security Pin 
        </label>
        <div class="flex gap-1">
            <input
            v-for="(digit, index) in pin"
            :key="index"
            :id="`pin-${index}`"
            :value="pin[index]"
            type="text"
            inputmode="numeric"
            maxlength="1"
            @input="handleInput($event, index)"
            @keydown="handleKeydown($event, index)"
            class="bg-gray-300 w-14 h-14 p-2 rounded-xl outline-0 text-center"
            />
        </div>
    </div>
    <button
    class="w-40 h-10 bg-purple-400 rounded-4xl hover:bg-purple-500 text-white"
    @click="handleLogin"

    >
        Continue
    </button>
</template>