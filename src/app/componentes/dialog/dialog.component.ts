import { Component, inject, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { Card } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { cardExample, empresaExample, enderecoExample } from '../../interfaces/mock-data';
import { CardVagasComponent } from "../card-vagas/card-vagas.component";
import { CardDialogoComponent } from "../card-dialogo/card-dialogo.component";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, CardVagasComponent, CardDialogoComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit{

  readonly dialogRef = inject(MatDialogRef<DialogComponent>);

  ngOnInit(): void {
  }

  cardData: Card; 
  empresaData: Empresa;
  enderecoData: Endereco;

  constructor() {
    // Inicializa as propriedades com os dados importados
    this.cardData = cardExample;
    this.empresaData = empresaExample;
    this.enderecoData = enderecoExample;
  }
}
