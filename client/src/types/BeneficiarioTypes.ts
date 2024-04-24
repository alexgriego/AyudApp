export interface BeneficiarioTypes {
    tipo_id: string; //
    identificacion: number; //
    nombre: string; //
    estado_civil: string;
    apellido: string; //
    fecha_nacimiento: string; // Assuming ISO 8601 date format (YYYY-MM-DD)
    genero: string;
    telefono: string; //
    correo?: string | null; //
    direccion: string;//
    ciudad: string;//
    departamento: string; //
    pais: string;//
    edad: number; //
    es_censado: boolean; //
    es_discapacitado: boolean;
    es_victima: boolean;
    es_desplazado: boolean;
    observaciones?: string | null;
    created_at: string;
    created_by: string;
}
