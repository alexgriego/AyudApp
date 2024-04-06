
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

export interface RegisterTypes {
    email: string;
    password: string;
    re_password: string;
    username: string;
}

export interface ActivateTypes {
    uid: string;
    token: string;
}