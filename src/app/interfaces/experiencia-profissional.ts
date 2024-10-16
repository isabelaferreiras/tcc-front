import { Endereco } from "./endereco";

export interface ExperienciaProfissional {
    cargo: string;
    empresa: string;
    endereco: Endereco;
    descricao: string;
    dataComeco: Date;
    dataFim: Date;
    salario: number;
}
