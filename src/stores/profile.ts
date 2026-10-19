import { defineStore } from "pinia";
import { ref } from "vue"

const apiUrl = import.meta.env.VITE_API_URL

export interface Profile {
    email_user: string
    email_google: string
    email_facebook: string
    first_name: string
    last_name: string
    phone_number: string
}

export const useProfileStore = defineStore('profile', () => {
    const profile = ref<Profile | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)
    
    const fetchProfile = async (force = false) => {
        if (profile.value && !force) return

        loading.value = true
        error.value = null

        try {
            const response = await fetch(`${apiUrl}/profile/me`, {
                credentials: 'include',
            })

            if (!response.ok) {
                if (response.status === 401) {
                    clearProfile()
                }
                
                throw new Error(
                    response.status === 401
                    ? 'Session expired. Please log in again.'
                    : 'Failed to fetch profile'
                )
            }

            const result = await response.json()
            profile.value = result.profile
            console.log(result)
        } catch (err) {
            error.value =
            err instanceof Error ? err.message : 'An error occured'
            throw err
        } finally{
            loading.value = false
        }
    }

    const clearProfile = () => {
        profile.value = null
        error.value = null
    }

    return {
        profile,
        loading,
        error,
        fetchProfile,
        clearProfile,
    }
})