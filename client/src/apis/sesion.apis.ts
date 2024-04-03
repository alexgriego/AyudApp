import type { CredentialsTypes } from "@/types/SesionTypes";
import baseApi from "./base.api";

export const getCredentials = (data: CredentialsTypes) => {
    console.log(data)
    return baseApi.post('jwt/create', data)
}