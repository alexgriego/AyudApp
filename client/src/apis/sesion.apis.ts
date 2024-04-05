import type { CredentialsTypes, ChangePasswordConfirmTypes } from "@/types/SesionTypes";
import baseApi from "./base.api";
import SesionStore from "@/stores/SesionStore";
export const getCredentials = (data: CredentialsTypes) => {
    return baseApi.post('jwt/create', data)
}

export const getNewPAT = async () => {
    const sesion = SesionStore()
    if (sesion.RAT) {
        return await baseApi.post('jwt/refresh', { refresh: `${sesion.RAT}` })
    } else {
        throw new Error('RAT is null')
    }
}

export const changePassword = (data: string) => {
    return baseApi.post('users/reset_password/', { email: data })
}

export const changePasswordConfirm = (data: ChangePasswordConfirmTypes) => {
    return baseApi.post('users/reset_password_confirm/', data)
}