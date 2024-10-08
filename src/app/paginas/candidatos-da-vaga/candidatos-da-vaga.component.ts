import { Component, OnInit } from '@angular/core';
import { CabecalhoEmpresaComponent } from "../../componentes/cabecalho-empresa/cabecalho-empresa.component";
import { ViewProfissionalComponent } from "../../componentes/view-profissional/view-profissional.component";
import { Profissional } from '../../interfaces/profissional';
import { profissionalExample } from '../../interfaces/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidatos-da-vaga',
  standalone: true,
  imports: [CabecalhoEmpresaComponent, ViewProfissionalComponent, CommonModule],
  templateUrl: './candidatos-da-vaga.component.html',
  styleUrl: './candidatos-da-vaga.component.css'
})
export class CandidatosDaVagaComponent implements OnInit{

  profissionalList: Profissional[] = []; // Lista de cards (vagas)

  profissionalData: Profissional; 
  
  constructor() {
    // Inicializa as propriedades com os dados importados
    this.profissionalData = profissionalExample;
  }

  ngOnInit(): void {
    this.profissionalList = [profissionalExample, profissionalExample, profissionalExample]; // Pode substituir por dados do backend
    console.log('Dados enviados para os cards:', this.profissionalList);
  }

}
