import { Component, inject } from '@angular/core';
import { CabecalhoEmpresaComponent } from "../../componentes/cabecalho-empresa/cabecalho-empresa.component";
import { RouterLink } from '@angular/router';
import { CardEmpresaComponent } from "../../componentes/card-empresa/card-empresa.component";
import { Card } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { cardExample, empresaExample, enderecoExample } from '../../interfaces/mock-data';
import { NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { EmpresaCardDialogComponent } from '../../componentes/empresa-card-dialog/empresa-card-dialog.component';

@Component({
  selector: 'app-vagas-empresa',
  standalone: true,
  imports: [CabecalhoEmpresaComponent, RouterLink, CardEmpresaComponent, NgFor, 
    MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, RouterLink],
  templateUrl: './vagas-empresa.component.html',
  styleUrl: './vagas-empresa.component.css'
})
export class VagasEmpresaComponent {

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
