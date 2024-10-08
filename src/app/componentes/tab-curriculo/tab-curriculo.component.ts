import {MatTabsModule} from '@angular/material/tabs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface ExampleTab {
  label: string;
  content: string;
}

export interface Experience {
  cargo: string;
  empresa: string;
  descricao: string;
  cidade: string;
  estado: string;
  dataInicio: Date;
  dataFim: Date;
  salario: number;
}

export interface HabilidadesPessoais {
  habilidade: string;
}

export interface HabilidadesTecnicas {
  habilidade: string;
}

@Component({
  selector: 'app-tab-curriculo',
  standalone: true,
  imports: [MatTabsModule, CommonModule, FormsModule],
  templateUrl: './tab-curriculo.component.html',
  styleUrl: './tab-curriculo.component.css'
})
export class TabCurriculoComponent {

   // Array para armazenar as coisas
   experiencias: Experience[] = [];
   habilidadesPessoais: HabilidadesPessoais[] = [];
   habilidadesTecnicas: HabilidadesTecnicas[] = [];


   //********seção experiências*******/

   // Método para adicionar uma nova experiência
   adicionarExperiencia() {
    console.log('Adicionando nova experiência');
     this.experiencias.push({
       cargo: '',
       empresa: '',
       descricao: '',
       cidade: '',
       estado: '',
       dataInicio: new Date(),
       dataFim: new Date(),
       salario: 0
     });
   }
 
   // Método para remover uma experiência
   removerExperiencia(index: number) {
     this.experiencias.splice(index, 1);
   }
 
   // Aqui você pode salvar as informações das experiências
   salvarExperiencias() {
     console.log(this.experiencias);
     // Aqui você poderia enviar os dados para um serviço ou back-end
   }

   //******seção habilidades*********

   adicionarHabilidadePessoal() {
    console.log('Adicionando nova habilidade');
    this.habilidadesPessoais.push({
      habilidade: '',
    });
   }

   removerHabilidadePessoal(index: number) {
    this.habilidadesPessoais.splice(index, 1);
   }

   salvarHabilidadePessoal() {
    console.log(this.habilidadesPessoais);
   }

   // ********seção habilidades tecnicas************

   adicionarHabilidadeTecnica() {
    console.log('Adicionando nova habilidade');
    this.habilidadesTecnicas.push({
      habilidade: '',
    });
   }

   removerHabilidadeTecnica(index: number) {
    this.habilidadesTecnicas.splice(index, 1);
   }

   salvarHabilidadeTecnica() {
    console.log(this.habilidadesTecnicas);
   }

}
