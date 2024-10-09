export interface Login {
    login: string;
    password: string;
}

export interface LoginResponse {
    empresaId: number;
    profissionalId: number;
    token: string;
    role: string;
}


