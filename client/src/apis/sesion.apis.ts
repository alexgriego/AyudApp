import type { CredentialsTypes } from "@/types/SesionTypes";
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