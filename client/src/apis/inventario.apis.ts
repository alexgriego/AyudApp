import SesionStore from "@/stores/SesionStore";
import baseApi from "./base.api";

export const getInventario = async () => {
    const store = SesionStore();
    return await baseApi.get("/inventario/productos/",
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
};

export const getProducto = async (id: any) => {
    const store = SesionStore();
    return await baseApi.get(`/inventario/productos/${id}/`,
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
};

export const createProducto = async (data: any) => {
    const store = SesionStore();
    return await baseApi.post("/inventario/productos/", data,
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
};

export const updateProducto = async (id: any, data: any) => {
    const store = SesionStore();
    return await baseApi.put(`/inventario/productos/${id}/`, data,
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
};

export const deleteProducto = async (id: any) => {
    const store = SesionStore();
    return await baseApi.delete(`/inventario/productos/${id}/`, {
        headers: {
            "Authorization": `JWT ${store.PAT}`
        }
    });
};

export const getDineros = async () => {
    const store = SesionStore();
    return await baseApi.get("/inventario/dineros/",
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
}

export const getDinero = async (id: any) => {
    const store = SesionStore();
    return await baseApi.get(`/inventario/dineros/${id}/`,
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
};

export const createDinero = async (data: any) => {
    const store = SesionStore();
    return await baseApi.post("/inventario/dineros/", data,
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
};

export const updateDinero = async (id: any, data: any) => {
    const store = SesionStore();
    return await baseApi.put(`/inventario/dineros/${id}/`, data,
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
};

export const deleteDinero = async (id: any) => {
    const store = SesionStore();
    return await baseApi.delete(`/inventario/dineros/${id}/`, {
        headers: {
            "Authorization": `JWT ${store.PAT}`
        }
    });
};

export const getJornadas = async () => {
    const store = SesionStore();
    return await baseApi.get("/inventario/jornadas/",
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
}

export const getJornada = async (id: any) => {
    const store = SesionStore();
    return await baseApi.get(`/inventario/jornadas/${id}/`,
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
};

export const createJornada = async (data: any) => {
    const store = SesionStore();
    return await baseApi.post("/inventario/jornadas/", data,
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
};


export const deleteJornada = async (id: any) => {
    const store = SesionStore();
    return await baseApi.delete(`/inventario/jornadas/search/${id}/`, {
        headers: {
            "Authorization": `JWT ${store.PAT}`
        }
    });
};

export const searchJornada = async (id: any) => {
    const store = SesionStore();
    return await baseApi.get(`/inventario/jornadas/search/${id}/`,
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
}

export const finishJornada = async (id: any) => {
    const store = SesionStore();
    return await baseApi.put(`/inventario/jornadas/search/${id}/`, {},
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
}

export const getProductosJornada=async(name:any)=>{
    const store = SesionStore();
    return await baseApi.get(`/inventario/jornadas/producto/${name}/`,
        {
            headers: {
                "Authorization": `JWT ${store.PAT}`
            }
        }
    );
    
}