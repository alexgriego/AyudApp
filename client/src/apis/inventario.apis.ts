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