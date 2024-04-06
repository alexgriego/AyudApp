export interface UserTypes {
    id: number;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    address: string | null;
    city: string;
    uid: number | null;
    phone: string | null;
    is_superuser: boolean;
    groups: any[];
}

export interface UserFormTypes {
    first_name: string;
    last_name: string;
    address: string | null;
    city: string | 'Riohacha';
    uid: number | null;
    phone: string | null;

}