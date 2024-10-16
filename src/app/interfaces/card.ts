import { Empresa, EmpresaDaVaga } from "./empresa";
import { Endereco } from "./endereco";

export interface Card {
    id: number;
    titulo: string;
    descricao: string;
    empresa: Empresa;
    cargo: string;
    situacao: string;
    inscritos: number;
    limiteCandidatos: number;
}

export enum Situacao {
    ATIVO = 'ATIVO',
    NAO_ATIVO = 'NAO_ATIVO'
}

export interface CriarVaga {
    titulo: string;
    empresaId: number;
    endereco: Endereco;
    descricao: string;
    cargo: string;
    limite: boolean;
    limiteProfissionais: number;
}

export interface VerEmpresaDaVaga {
    nomeEmpresa: string;
    endereco: Endereco;
    descricao: string;
    ramo: string;
}

export interface VerProfissionalDaVaga {
    id: number;
    nome: string;
    dataNascimento: Date;
    email: string;
    telefone: string;
    endereco: Endereco;
}

export interface VerVaga {
    id?: number;
    titulo: string;
    empresa: VerEmpresaDaVaga;
    endereco: Endereco;
    descricao: string;
    cargo: string;
    limiteProfissionais: number;
    situacao: string;
    profissionais: VerProfissionalDaVaga[];
}

export interface VerVagaProfissional {
    id: number;
    titulo: string;
    empresa: EmpresaDaVaga;
    descricao: string;
    cargo: string;
    situacao: string;
}
