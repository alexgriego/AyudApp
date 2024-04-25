import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserFormTypes, UserTypes } from '@/types/ProfileTypes'
import { getUserData, saveUserData } from '@/apis/user.apis'
import SesionStore from './SesionStore'
import { successMessage } from '@/components/messages'
import { useRouter } from 'vue-router'
const UserStore = defineStore('user', () => {
    const user = ref({} as UserTypes)
    const userGroup = ref<string>('')
    const sesion = SesionStore()
    const url = useRouter()

    const guardarUsuario = async () => {
        await getUserData()
            .then((Response) => {
                user.value = Response.data
                userGroup.value = Response.data.groups[0]
            })
    }



    const guardarDatosUsuario = async (data: UserFormTypes) => {
        sesion.alterLoading()
        await saveUserData(data)
            .then((Response) => {
                guardarUsuario()
                successMessage('Hecho', 'Datos actualizados correctamente')
                url.push('/profile')
            })
            .finally(() => {
                sesion.alterLoading()
            })


    }

    const vaciarUsuario = () => {
        user.value = {} as UserTypes
    }

    return {
        user,
        guardarUsuario,
        vaciarUsuario,
        guardarDatosUsuario,
        userGroup
    }
})

export default UserStore
