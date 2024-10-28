import baseApi from './base.api';
import SesionStore from '@/stores/SesionStore';

export const getBenefinciarios = async () => {
    const sesion = SesionStore();
    return baseApi.get('personas/beneficiarios/', {
        headers: {
            Authorization: `JWT ${sesion.PAT}`
        }
    });
}

export const getBeneficiario = async (id: number) => {
    const sesion = SesionStore();
    return baseApi.get(`personas/beneficiarios/${id}/`, {
        headers: {
            Authorization: `JWT ${sesion.PAT}`
        }
    });
}

export const saveBeneficiario = async (data: any) => {
    const sesion = SesionStore();
    return baseApi.post('personas/beneficiarios/', data, {
        headers: {
            Authorization: `JWT ${sesion.PAT}`
        }
    });
}

export const updateBeneficiario = async (id: number, data: any) => {
    const sesion = SesionStore();
    return baseApi.put(`personas/beneficiarios/${id}/`, data, {
        headers: {
            Authorization: `JWT ${sesion.PAT}`
        }
    });
}

export const deleteBeneficiario = async (id: number) => {
    const sesion = SesionStore();
    return baseApi.delete(`personas/beneficiarios/${id}/`, {
        headers: {
            Authorization: `JWT ${sesion.PAT}`
        }
    });
}

export const añadirNuevoBeneficiario = async (data: any) => {
    const sesion = SesionStore();
    return baseApi.post('personas/beneficiarios/', data, {
        headers: {
            Authorization: `JWT ${sesion.PAT}`
        }
    });
}