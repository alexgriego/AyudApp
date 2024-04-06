import SesionStore from "@/stores/SesionStore";
import baseApi from "./base.api";

export const getUserData = async () => {
    const sesion = SesionStore()
    return await baseApi.get('/users/me/', {
        headers: {
            Authorization: `JWT ${sesion.PAT}`
        }
    })
}