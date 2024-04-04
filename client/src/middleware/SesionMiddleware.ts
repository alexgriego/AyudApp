import { useRouter } from 'vue-router'
import SesionStore from '@/stores/SesionStore'
import { watchEffect } from 'vue'
export const RedirectIfAuth = () => {
    const url = useRouter()
    const sesion = SesionStore()
    watchEffect(() => {
        if (sesion.isLogged) {
            url.push('/')
        }
    })
}

export const RedirectIfNotAuth = () => {
    const url = useRouter()
    const sesion = SesionStore()
    watchEffect(() => {
        if (!sesion.isLogged) {
            url.push('/login')
        }
    })
}