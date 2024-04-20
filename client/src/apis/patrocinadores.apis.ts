import baseApi from "./base.api";
import SesionStore from "@/stores/SesionStore";

export const getPatrocinadores = async () => {
    const sesion = SesionStore()
    return await baseApi.get('/personas/patrocinadores/', {
        headers: {
            'Authorization': `JWT ${sesion.PAT}`
        }
    })
}

export const getPatrocinador = async (identificacion: number) => {
    const sesion = SesionStore()
    return await baseApi.get(`/personas/patrocinadores/${identificacion}/`, {
        headers: {
            'Authorization': `JWT ${sesion.PAT}`
        }
    })
}

export const savePatrocinador = async (patrocinador: any) => {
    const sesion = SesionStore()
    return await baseApi.post('/personas/patrocinadores/', patrocinador, {
        headers: {
            'Authorization': `JWT ${sesion.PAT}`
        }
    })
}

export const updatePatrocinador = async (identificacion: number, patrocinador: any) => {
    const sesion = SesionStore()
    return await baseApi.put(`/personas/patrocinadores/${identificacion}/`, patrocinador, {
        headers: {
            'Authorization': `JWT ${sesion.PAT}`
        }
    })
}

export const deletePatrocinador = async (identificacion: number) => {
    const sesion = SesionStore()
    return await baseApi.delete(`/personas/patrocinadores/${identificacion}/`, {
        headers: {
            'Authorization': `JWT ${sesion.PAT}`
        }
    })
}

