import SesionStore from "@/stores/SesionStore";
import baseApi from "./base.api";

export const createFamilia = async (familia: any) => {
    const sesion = SesionStore()
    return await baseApi.post("/censos/familias/", familia,
        {
            headers: {
                Authorization: `JWT ${sesion.PAT}`
            }
        }
    );
};

export const getFamilias = async () => {
    const sesion = SesionStore()
    return await baseApi.get("/censos/familias/",
        {
            headers: {
                "Authorization": `JWT ${sesion.PAT}`
            }
        }
    );
}

export const getFamilia = async (id: number) => {
    const sesion = SesionStore()
    return await baseApi.get(`/censos/familias/${id}/`,
        {
            headers: {
                "Authorization": `JWT ${sesion.PAT}`
            }
        }
    );
}

export const removeFromFamilia = async (id: number) => {
    const sesion = SesionStore()
    return await baseApi.delete(`/censos/familias/datos/${id}/`,
        {
            headers: {
                "Authorization": `JWT ${sesion.PAT}`
            }
        }
    );
}


export const deleteFamilia = async (id: number) => {
    const sesion = SesionStore()
    return await baseApi.delete(`/censos/familias/detalles/${id}/`,
        {
            headers: {
                "Authorization": `JWT ${sesion.PAT}`
            }
        }
    );
}

export const viewFamilia = async (id: number) => {
    const sesion = SesionStore()
    return await baseApi.get(`/censos/familias/detalles/${id}/`,
        {
            headers: {
                "Authorization": `JWT ${sesion.PAT}`
            }
        }
    );
}

export const DatosFamilia = async (id: number) => {
    const sesion = SesionStore()
    return await baseApi.get(`/censos/familias/datos/${id}/`,
        {
            headers: {
                "Authorization": `JWT ${sesion.PAT}`
            }
        }
    );
}

export const buscarBeneficiario = async (id: number) => {
    const sesion = SesionStore()
    return await baseApi.get(`/personas/beneficiarios/detalle/${id}/`,
        {
            headers: {
                "Authorization": `JWT ${sesion.PAT}`
            }
        }
    )
}