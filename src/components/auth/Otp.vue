<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const otp = ref(['', '', '', ''])

function handleInput(event: Event, index: number) {
  const target = event.target as HTMLInputElement

  // hanya angka
  target.value = target.value.replace(/\D/g, '')

  otp.value[index] = target.value

  // auto next
  if (target.value && index < otp.value.length - 1) {
    const nextInput = document.getElementById(
      `otp-${index + 1}`
    ) as HTMLInputElement

    nextInput?.focus()
  }
}

function handleKeydown(event: KeyboardEvent, index: number) {
  const target = event.target as HTMLInputElement

  // kalau backspace & kosong
  if (
    event.key === 'Backspace' &&
    !target.value &&
    index > 0
  ) {
    const prevInput = document.getElementById(
      `otp-${index - 1}`
    ) as HTMLInputElement

    prevInput?.focus()
  }
}

function handlePaste(event: ClipboardEvent) {
  event.preventDefault()

  const pastedData = event.clipboardData
    ?.getData('text')
    .replace(/\D/g, '')
    .slice(0, 4)

  if (!pastedData) return

  pastedData.split('').forEach((char, index) => {
    otp.value[index] = char
  })
}

function handleOtp() {
  console.log(otp.value.join(''))
    router.push('/securitypin')
}
</script>

<template>
    <div>
        <div class="text-2xl font-semibold">
          Verify is that you?  
        </div>
        <div class="w-80">
            One more step, please check your verification code on your email or mobile
        </div>
    </div>
    <div class="flex flex-col gap-1">
        <label class="text-left">
            Otp Verification
        </label>
        <div class="flex gap-1">
            <input
            v-for="(digit, index) in otp"
            :key="index"
            :id="`otp-${index}`"
            :value="otp[index]"
            type="text"
            inputmode="numeric"
            maxlength="1"
            @input="handleInput($event, index)"
            @paste="handlePaste"
            @keydown="handleKeydown($event, index)"
            class="bg-gray-300 w-14 h-14 rounded-xl text-center outline-0"
            />
        </div>
    </div>
    <button
    class="w-40 h-10 bg-purple-400 rounded-4xl hover:bg-purple-500 text-white"
    @click="handleOtp"

    >
        Continue
    </button>
</template>