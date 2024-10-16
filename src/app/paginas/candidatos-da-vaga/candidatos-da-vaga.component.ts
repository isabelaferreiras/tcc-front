import { Component, Input, OnInit } from '@angular/core';
import { CabecalhoEmpresaComponent } from "../../componentes/cabecalho-empresa/cabecalho-empresa.component";
import { ViewProfissionalComponent } from "../../componentes/view-profissional/view-profissional.component";
import { Profissional } from '../../interfaces/profissional';
import { profissionalExample } from '../../interfaces/mock-data';
import { CommonModule } from '@angular/common';
import { VagaService } from '../../services/vaga.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-candidatos-da-vaga',
  standalone: true,
  imports: [CabecalhoEmpresaComponent, ViewProfissionalComponent, CommonModule, RouterLink],
  templateUrl: './candidatos-da-vaga.component.html',
  styleUrl: './candidatos-da-vaga.component.css',
  providers: [VagaService]
})
export class CandidatosDaVagaComponent implements OnInit{

  profissionalList: Profissional[] = []; // Lista de cards (vagas)

  
  constructor(private vagaService: VagaService) {
  }

  ngOnInit(): void {
    this.getProfissional();  // Pode substituir por dados do backend
  }

  getProfissional() {
    this.vagaService.verCandidatosInscritos(Number(localStorage.getItem('vagaId'))).subscribe({
      next: (profissionais) => this.profissionalList = profissionais,
      error: (error) => console.error('Erro ao buscar candidatos:', error)
    })
  }



}
