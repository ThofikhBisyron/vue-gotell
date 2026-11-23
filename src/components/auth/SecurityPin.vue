<script setup lang="ts">
import { useToast } from '@/composables/useToast'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { showToast } = useToast()

const pin = ref(['', '', '', '', '', ''])

const pinCode = computed(() => pin.value.join(''))

function handleKeydown(event: KeyboardEvent, index: number) {
    const target = event.target as HTMLInputElement

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

    const value = target.value.replace(/\D/g, '').slice(-1)

    pin.value[index] = value
    target.value = value

    if (value && index < 5) {
        const nextInput = document.getElementById(
            `pin-${index + 1}`
        ) as HTMLInputElement

        nextInput?.focus()
    }
}


function handleLogin() {
    if (pinCode.value.length !== 6) {
        showToast('Please enter your 6-digit PIN.', 'error')
        return
    }
    
    router.replace('/')
}

function handleLater() {
    router.replace('/')
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
        <button @click="handleLater" class="font-italic">
          or you can add pin later
        </button>
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