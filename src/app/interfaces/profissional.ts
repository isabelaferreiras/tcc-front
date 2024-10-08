import { Curriculo } from "./curriculo";
import { Endereco } from "./endereco";

export interface Profissional {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: Endereco;
}

export interface CriarProfissional {
    email: string;
    nome: string;
    dataNascimento: string;
    endereco: Endereco;
    password: string;
}
