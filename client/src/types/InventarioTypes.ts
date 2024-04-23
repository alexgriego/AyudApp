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

export interface EventoTypes {
    id: number;
    descripcion: string | null;
    nombre: string;
    fecha_inicio: Date;
    es_finalizado: boolean;
    fecha_fin: Date | null;
    producto: ProductoTypes | null;
    cantidad_producto: number;
    fondos: DineroTypes | null;
    cantidad_fondos: number;
    created_at: Date;
    created_by: string;
}

