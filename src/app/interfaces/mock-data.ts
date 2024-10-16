import { Card } from "./card";
import { Curriculo } from "./curriculo";
import { Empresa } from "./empresa";
import { Endereco } from "./endereco";
import { Escolaridade } from "./escolaridade";
import { ExperienciaProfissional } from "./experiencia-profissional";
import { HabilidadesPessoais } from "./habilidades-pessoais";
import { HabilidadesTecnicas } from "./habilidades-tecnicas";
import { Idioma } from "./idioma";
import { Profissional } from "./profissional";


// Objeto Endereco
export const enderecoExample: Endereco = {
    cidade: "Belo Horizonte",
    estado: "MG"
};

// Objeto Empresa
export const empresaExample: Empresa = {
    nome: "Inovatech",
    endereco: enderecoExample,
    descricao: "Empresa focada em desenvolvimento de tecnologia e inovação.",
    ramo: "Tecnologia e Inovação"
};

// Objeto Card
export const cardExample: Card = {
    id: 1,
    titulo: "Desenvolvedor Front-end",
    descricao: "Oportunidade para desenvolvedor front-end com experiência em Angular.",
    empresa: empresaExample,
    cargo: "Desenvolvedor",
    situacao: "aberta",
    inscritos: 6,
    limiteCandidatos: 10
};

export const profissionalExample: Profissional = {
    id: 1,
    nome: "Fulano de Tal",
    email: "fulano@gmail.com",
    telefone: "18996773701",
    endereco: enderecoExample
}

export const experienciaExample: ExperienciaProfissional[] = [
   {cargo: "Dev",
    empresa: "FEMA",
    endereco: enderecoExample,
    descricao: "Desenvolvedor de software back-end",
    dataComeco: new Date(2022, 1, 16),
    dataFim: new Date(2023, 3, 22),
    salario: 2000},
    {cargo: "estagiário",
        empresa: "FEMA",
        endereco: enderecoExample,
        descricao: "Estagiário de direito",
        dataComeco: new Date(2023, 3, 25),
        dataFim: new Date(2023, 10, 29),
        salario: 1500},
];

export const habilidadesPessoaisExample: HabilidadesPessoais[] = [
    { habilidade: "comunicativo" },
    { habilidade: "proativo" }
];

export const habilidadesTecnicasExample: HabilidadesTecnicas[] = [
    { habilidade: "Java" },
    { habilidade: "Pacote Office" }
];

export const idiomasExample: Idioma[] = [
    {idioma: 'inglês', nivelLeitura: 'médio', nivelConversacao: 'básico'}
]

export const curriculoExample: Curriculo = {
    id: 1,
    profissional: profissionalExample,
    idiomas: idiomasExample,
    escolaridade: Escolaridade.GRADUACAO_COMPLETA,
    experienciaProfissional: experienciaExample,
    habilidadesPessoais: habilidadesPessoaisExample,
    habilidadesTecnicas: habilidadesTecnicasExample,
}
