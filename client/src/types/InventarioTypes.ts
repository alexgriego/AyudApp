import type { PatrocinadorTypes } from "./PatrocinadorTypes";

export interface ProductoTypes {
    codigo: string;
    nombre: string;
    descripcion: string | null;
    cantidad: number;
    tipo: string;
    es_perecedero: boolean;
    fecha_vencimiento: Date | null;
    created_at: Date;
    created_by: string;
}

export interface DineroTypes {
    id: number;
    patrocinador: string | null;
    cantidad: string;
}