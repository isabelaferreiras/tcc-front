import { Endereco } from "./endereco";

export interface Empresa {
    nome: string;
    endereco: Endereco;
    descricao: string;
    ramo: string;
}
