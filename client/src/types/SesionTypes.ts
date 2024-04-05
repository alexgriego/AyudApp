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

export interface ChangePasswordConfirmTypes {
    uid: string;
    token: string;
    new_password: string;
    re_new_password: string;
}