import { Component, Injectable } from '@angular/core';
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { Card } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { cardExample, empresaExample, enderecoExample } from '../../interfaces/mock-data';
import { CardVagasComponent } from "../../componentes/card-vagas/card-vagas.component";

@Component({
  selector: 'app-vagas-disponiveis',
  standalone: true,
  imports: [CabecalhoComponent, NgFor, RouterLink, CardVagasComponent],
  templateUrl: './vagas-disponiveis.component.html',
  styleUrl: './vagas-disponiveis.component.css'
})

@Injectable()
export class VagasDisponiveisComponent {

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
