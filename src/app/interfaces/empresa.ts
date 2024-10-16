import { Endereco } from "./endereco";

export interface Empresa {
    nome: string;
    endereco: Endereco;
    descricao: string;
    ramo: string;
}

export interface EmpresaDaVaga {
    nome: string;
    endereco: Endereco;
    descricao: string;
    ramo: string;
}

export interface CriarEmpresa {
    email: string;
    nomeEmpresa: string;
    endereco: Endereco;
    descricao: string;
    cnpj: string;
    ramo: string;
    password: string;
}
