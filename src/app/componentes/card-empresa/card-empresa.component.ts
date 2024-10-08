import { Component, Input, OnInit, inject } from '@angular/core';
import { Card } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { MatDialog } from '@angular/material/dialog';
import { EmpresaCardDialogComponent } from '../empresa-card-dialog/empresa-card-dialog.component';
import { DialogoCardEmpresaComponent } from '../dialogo-card-empresa/dialogo-card-empresa.component';

@Component({
  selector: 'app-card-empresa',
  standalone: true,
  imports: [],
  templateUrl: './card-empresa.component.html',
  styleUrl: './card-empresa.component.css'
})
export class CardEmpresaComponent implements OnInit {

  constructor() {
    console.log('CardEmpresaComponent inicializado');
  }

  ngOnInit(): void {
    console.log('Dados do card:', this.card);
  }

  @Input({required: true}) card!: Card;
  @Input({required: true}) empresa!: Empresa;
  @Input({required: true}) endereco!: Endereco;

  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoCardEmpresaComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

