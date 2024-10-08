import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-card-dialogo',
  standalone: true,
  imports: [MatDialogClose],
  templateUrl: './card-dialogo.component.html',
  styleUrl: './card-dialogo.component.css'
})
export class CardDialogoComponent implements OnInit{

  constructor() {
    console.log('CardVagasComponent inicializado');
  }

  ngOnInit(): void {
    console.log('Dados do card:', this.card);
  }

  @Input({required: true}) card!: Card;
  @Input({required: true}) empresa!: Empresa;
  @Input({required: true}) endereco!: Endereco;
}
