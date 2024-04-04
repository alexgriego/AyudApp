import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCredentials } from '@/apis/sesion.apis'
import type { CredentialsTypes } from '@/types/SesionTypes'
import { useRouter } from 'vue-router'
import { successMessage } from '@/components/messages'

const SesionStore = defineStore('sesion', () => {
    const url = useRouter()
    const PAT = ref(null)
    const RAT = ref(null)
    const isLoading = ref(false)
    const isLogged = computed(() => PAT.value !== null && RAT.value !== null)
    const login = async (data: CredentialsTypes) => {
        alterLoading()
        await getCredentials(data).then((response) => {
            PAT.value = response.data.PAT
            RAT.value = response.data.RAT
            successMessage('Bienvenido', 'Sesión iniciada correctamente')
        }).finally(() => {
            alterLoading()
        })
    }
    const logout = () => {
        PAT.value = null
        RAT.value = null
        successMessage('Hasta luego', 'Sesión cerrada correctamente')
        url.push('/login')
    }
    const alterLoading = () => {
        isLoading.value = !isLoading.value
    }
    return {
        PAT,
        RAT,
        isLogged,
        isLoading,
        login,
        logout,
        alterLoading
    }
})

export default SesionStore
