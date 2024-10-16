import { Component, OnInit } from '@angular/core';
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { CardVagasComponent } from "../../componentes/card-vagas/card-vagas.component";
import { Endereco } from '../../interfaces/endereco';
import { Card, VerVagaProfissional } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { cardExample, empresaExample, enderecoExample } from '../../interfaces/mock-data';
import { NgFor } from '@angular/common';
import {Injectable} from '@angular/core';
import { RouterLink } from '@angular/router';
import { VagaCandidatadaComponent } from '../../componentes/vaga-candidatada/vaga-candidatada.component';
import { VagaService } from '../../services/vaga.service';

@Component({
  selector: 'app-vagas-profissional',
  standalone: true,
  imports: [CabecalhoComponent, VagaCandidatadaComponent, NgFor, RouterLink],
  templateUrl: './vagas-profissional.component.html',
  styleUrl: './vagas-profissional.component.css',
  providers: [VagaService]
})
@Injectable()
export class VagasProfissionalComponent implements OnInit {
  cardList: VerVagaProfissional[] = []; // Lista de cards (vagas)

  constructor(private vagaService: VagaService) {}
    // Inicializa as propriedades com os dados importados
  

  ngOnInit(): void {
    this.verVagasCandidatadas()
  }

  verVagasCandidatadas() {
    this.vagaService.verVagasCandidatas(Number(localStorage.getItem('profissionalId'))).subscribe({
      next: (response) => {
        this.cardList = response;
      }
    })

  }
}
