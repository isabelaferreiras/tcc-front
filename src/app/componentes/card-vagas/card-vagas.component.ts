import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Card } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card-vagas',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './card-vagas.component.html',
  styleUrl: './card-vagas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class CardVagasComponent implements OnInit{

  constructor() {
    console.log('CardVagasComponent inicializado');
  }

  ngOnInit(): void {
    console.log('Dados do card:', this.card);
  }

  @Input({required: true}) card!: Card;
  @Input({required: true}) empresa!: Empresa;
  @Input({required: true}) endereco!: Endereco;

  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
