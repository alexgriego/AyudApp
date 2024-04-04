export interface UserTypes {
    id: string;
    name: string;
    email: string;
    password: string;
    groups: Array<{ id: string, name: string }>;
    status: string;
}

export interface CredentialsTypes {
    username: string;
    password: string;
}