import type { CredentialsTypes } from "@/types/SesionTypes";
import baseApi from "./base.api";

export const getCredentials = (data: CredentialsTypes) => {
    return baseApi.post('jwt/create', data)
}