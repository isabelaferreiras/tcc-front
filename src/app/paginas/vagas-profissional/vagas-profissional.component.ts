import { Component, OnInit } from '@angular/core';
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { CardVagasComponent } from "../../componentes/card-vagas/card-vagas.component";
import { Endereco } from '../../interfaces/endereco';
import { Card } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { cardExample, empresaExample, enderecoExample } from '../../interfaces/mock-data';
import { NgFor } from '@angular/common';
import {Injectable} from '@angular/core';
import { RouterLink } from '@angular/router';
import { VagaCandidatadaComponent } from '../../componentes/vaga-candidatada/vaga-candidatada.component';

@Component({
  selector: 'app-vagas-profissional',
  standalone: true,
  imports: [CabecalhoComponent, VagaCandidatadaComponent, NgFor, RouterLink],
  templateUrl: './vagas-profissional.component.html',
  styleUrl: './vagas-profissional.component.css'
})
@Injectable()
export class VagasProfissionalComponent implements OnInit {
  
  cardList: Card[] = []; // Lista de cards (vagas)

  cardData: Card; 
  empresaData: Empresa;
  enderecoData: Endereco;

  constructor() {
    // Inicializa as propriedades com os dados importados
    this.cardData = cardExample;
    this.empresaData = empresaExample;
    this.enderecoData = enderecoExample;
  }

  ngOnInit(): void {
    this.cardList = [cardExample, cardExample, cardExample]; // Pode substituir por dados do backend
    console.log('Dados enviados para os cards:', this.cardList);
  }


  
  
}
