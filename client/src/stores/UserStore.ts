import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserTypes } from '@/types/ProfileTypes'
import { getUserData } from '@/apis/user.apis'
const UserStore = defineStore('user', () => {
    const user = ref({} as UserTypes)

    const guardarUsuario = async () => {
        await getUserData()
            .then((Response) => {
                user.value = Response.data
            })
    }

    const actualizarUsuario = (data: UserTypes) => {
        user.value = data
    }

    const vaciarUsuario = () => {
        user.value = {} as UserTypes
    }

    return {
        user,
        guardarUsuario,
        actualizarUsuario,
        vaciarUsuario
    }
})

export default UserStore
