import { Component, Injectable } from '@angular/core';
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { Card, VerVagaProfissional } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { cardExample, empresaExample, enderecoExample } from '../../interfaces/mock-data';
import { CardVagasComponent } from "../../componentes/card-vagas/card-vagas.component";
import { VagaService } from '../../services/vaga.service';

@Component({
  selector: 'app-vagas-disponiveis',
  standalone: true,
  imports: [CabecalhoComponent, NgFor, RouterLink, CardVagasComponent],
  templateUrl: './vagas-disponiveis.component.html',
  styleUrl: './vagas-disponiveis.component.css',
  providers: [ VagaService ]
})

@Injectable()
export class VagasDisponiveisComponent {

  vagaList: VerVagaProfissional[] = []; // Lista de cards (vagas)



  constructor(private vagaService: VagaService) {
    // Inicializa as propriedades com os dados importados

  }

  ngOnInit(): void {
    this.getVagas() // Pode substituir por dados do backend
    console.log('Dados enviados para os cards:', this.vagaList);
  }

  getVagas() {
    this.vagaService.getAllVagasProfissional().subscribe({
      next: (response) => {
        this.vagaList = response
      }
    })
  }
}
