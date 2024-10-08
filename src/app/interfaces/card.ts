import { Empresa } from "./empresa";
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

export interface criarVaga {
    titulo: string;
    empresaId: number;
    endereco: Endereco;
    descricao: string;
    cargo: string;
    limite: boolean;
    limiteProfissionais: number;
    situacao: Situacao;
}
