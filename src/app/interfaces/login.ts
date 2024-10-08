export interface Login {
    login: string;
    password: string;
}

export interface LoginResponse {
    id: number;
    token: string;
    role: string;
}


