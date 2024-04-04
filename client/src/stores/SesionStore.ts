import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCredentials } from '@/apis/sesion.apis'
import type { CredentialsTypes } from '@/types/SesionTypes'
import { useRouter } from 'vue-router'

const SesionStore = defineStore('sesion', () => {
    const url = useRouter()
    const PAT = ref(null)
    const RAT = ref(null)
    const isLogged = computed(() => PAT.value !== null && RAT.value !== null)
    const login = async (data: CredentialsTypes) => {
        await getCredentials(data).then((response) => {
            PAT.value = response.data.PAT
            RAT.value = response.data.RAT
        })
    }
    const logout = () => {
        PAT.value = null
        RAT.value = null
        url.push('/login')
    }
    return {
        PAT,
        RAT,
        isLogged,
        login,
        logout
    }
})

export default SesionStore
