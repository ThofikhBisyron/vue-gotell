<script setup lang="ts">
import { useToast } from '@/composables/useToast'
import { apiFetch } from '@/utils/apiFetch'
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const otp = ref(['', '', '', '', '', ''])
const email = ref('')
const loading = ref(false)
const { showToast } = useToast()

const otpCode = computed(() => otp.value.join(''))

onMounted(() => {
    email.value = history.state.email || ''
    
    if (!email.value) {
        showToast('Email not found. Please login again.', 'error')
        router.replace('/login')
    }
})

function handleInput(event: Event, index: number) {
    const target = event.target as HTMLInputElement

    const value = target.value.replace(/\D/g, '').slice(-1)

    otp.value[index] = value
    target.value = value

    if (value && index < 5) {
        const nextInput = document.getElementById(
            `otp-${index + 1}`
        ) as HTMLInputElement

        nextInput?.focus()
    }
}

function handleKeydown(event: KeyboardEvent, index: number) {
    const target = event.target as HTMLInputElement

    if (event.key === 'Backspace' && !target.value && index > 0) {
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
        .slice(0, 6)

    if (!pastedData) return

    otp.value = ['', '', '', '', '', '']

    pastedData.split('').forEach((char, index) => {
        otp.value[index] = char
    })

    nextTick(() => {
        const nextIndex = Math.min(pastedData.length, 5)

        const input = document.getElementById(
            `otp-${nextIndex}`
        ) as HTMLInputElement

        input?.focus()
    })
}

async function handleOtp() {
    if (!email.value) {
        showToast('Email not found. Please login again.', 'error')
        return
    }

    if (otpCode.value.length !== 6) {
        showToast('Please enter the 6-digit verification code.', 'error')
        return
    }

    loading.value = true

    try {
        const response = await apiFetch('/auth/email/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
                code: otpCode.value,
            }),
        })

        const result = await response.json()

        if (!response.ok) {
            throw new Error(result.message || 'OTP verification failed')
        }

        showToast('Email verified successfully.', 'success')

        router.replace('/')

    } catch (err) {
        showToast(
            err instanceof Error
                ? err.message
                : 'Something went wrong',
            'error',
        )
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div>
        <div class="text-2xl font-semibold">
          Verify is that you?  
        </div>
        <div class="w-80">
            One more step, please check your verification code on your email
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