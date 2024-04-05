import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCredentials, getNewPAT, activateAccount, changePassword, changePasswordConfirm, registerUser } from '@/apis/sesion.apis'
import type { ChangePasswordConfirmTypes, ActivateTypes, CredentialsTypes, RegisterTypes } from '@/types/SesionTypes'
import { useRouter } from 'vue-router'
import { errorMessage, successMessage } from '@/components/messages'

const SesionStore = defineStore('sesion', () => {
    const url = useRouter()
    const PAT = ref(null)
    const RAT = ref(null)
    const isLoading = ref(false)
    const timer = ref(0)
    const isLogged = computed(() => PAT.value !== null && RAT.value !== null)
    const login = async (data: CredentialsTypes) => {
        alterLoading()
        await getCredentials(data).then((response) => {
            PAT.value = response.data.access
            RAT.value = response.data.refresh
            successMessage('Bienvenido', 'Sesión iniciada correctamente')
        }).finally(() => {
            alterLoading()
        })
    }

    const incrementTimer = () => {
        timer.value++
    }

    const logout = () => {
        PAT.value = null
        RAT.value = null
        timer.value = 0
        successMessage('Hasta luego', 'Sesión cerrada correctamente')
        url.push('/login')
    }
    const alterLoading = () => {
        isLoading.value = !isLoading.value
    }

    const cambiarContraseña = async (data: string) => {
        alterLoading()
        await changePassword(data)
            .then(() => {
                successMessage('Correo enviado', 'Se ha enviado un correo para restablecer tu contraseña')
            })
            .catch((error) => {
                errorMessage(error.response.data)
            })
            .finally(() => {
                alterLoading()
            })
    }

    const registrarUsuario = async (data: RegisterTypes) => {
        alterLoading()
        await registerUser(data)
            .then(() => {
                successMessage('Usuario registrado', 'Verifique su correo para activar su cuenta')
                url.push('/login')
            })
            .catch((error) => {
                errorMessage(error.response.data)
            })
            .finally(() => {
                alterLoading()
            })
    }


    const guardarNuevaContraseña = async (data: ChangePasswordConfirmTypes) => {
        alterLoading()
        await changePasswordConfirm(data)
            .then(() => {
                successMessage('Contraseña cambiada', 'Se ha cambiado tu contraseña correctamente')
                url.push('/login')
            })
            .catch((error) => {
                errorMessage(error.response.data)
            })
            .finally(() => {
                alterLoading()
            })
    }

    const activarCuenta = async (data: ActivateTypes) => {
        console.log('store', data)
        alterLoading()
        await activateAccount(data)
            .then(() => {
                successMessage('Cuenta activada', 'Tu cuenta ha sido activada correctamente')
                url.push('/login')
            })
            .catch((error) => {
                errorMessage(error.response.data)
            })
            .finally(() => {
                alterLoading()
            })
    }

    const solicitarNuevoPAT = async () => {
        if (isLogged.value && timer.value >= 18 && timer.value <= 1799) {
            await getNewPAT()
                .then((response) => {
                    PAT.value = response.data.access
                    timer.value = 0
                })
                .catch((error) => {
                    errorMessage(error.response.data)
                    logout()
                })
        }
    }
    return {
        PAT,
        RAT,
        isLogged,
        isLoading,
        timer,
        incrementTimer,
        solicitarNuevoPAT,
        login,
        logout,
        alterLoading,
        cambiarContraseña,
        guardarNuevaContraseña,
        registrarUsuario,
        activarCuenta
    }
})

export default SesionStore
