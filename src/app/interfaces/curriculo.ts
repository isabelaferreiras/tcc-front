import { Endereco } from "./endereco";
import { Escolaridade } from "./escolaridade";
import { ExperienciaProfissional } from "./experiencia-profissional";
import { HabilidadesPessoais } from "./habilidades-pessoais";
import { HabilidadesTecnicas } from "./habilidades-tecnicas";
import { Idioma } from "./idioma";
import { Profissional } from "./profissional";

export interface Curriculo {
    id: number;
    profissional: Profissional;
    escolaridade: Escolaridade;
    experienciaProfissional: ExperienciaProfissional[];
    habilidadesPessoais: HabilidadesPessoais[];
    habilidadesTecnicas: HabilidadesTecnicas[];
    idiomas: Idioma[];
}

export interface CriarCurriculo{
    profissionalId: number;
    escolaridade: string;
    experienciaProfissional: ExperienciaProfissional[];
    habilidadesPessoais: HabilidadesPessoais[];
    habilidadesTecnicas: HabilidadesTecnicas[];
    idiomas: Idioma[];
}

export interface ProfissionalDoCurriculo {
    nome: string;
    dataNascimento: Date;
    email: string;
    endereco: Endereco;
    telefone: string
}

export interface VerCurriculoProfissional {
    id: number;
    profissional: ProfissionalDoCurriculo;
    escolaridade: string;
    experienciasProfissionais: ExperienciaProfissional[];
    habilidadesPessoais: HabilidadesPessoais[];
    habilidadesTecnicas: HabilidadesTecnicas[];
    idiomas: Idioma[];
}   
