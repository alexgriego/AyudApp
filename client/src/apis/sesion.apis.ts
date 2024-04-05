import type { CredentialsTypes, ChangePasswordConfirmTypes, RegisterTypes, ActivateTypes } from "@/types/SesionTypes";
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

export const registerUser = (data: RegisterTypes) => {
    return baseApi.post('users/', data)
}

export const activateAccount = (data: ActivateTypes) => {
    console.log(data)
    return baseApi.post('users/activation/', data)
}