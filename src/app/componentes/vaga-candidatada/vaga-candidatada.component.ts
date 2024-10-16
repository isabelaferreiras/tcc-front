import { Component, Input, inject } from '@angular/core';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { MatDialog } from '@angular/material/dialog';
import { DialogVagasCandidatadasComponent } from '../dialog-vagas-candidatadas/dialog-vagas-candidatadas.component';
import { Card, VerVagaProfissional } from '../../interfaces/card';

@Component({
  selector: 'app-vaga-candidatada',
  standalone: true,
  imports: [],
  templateUrl: './vaga-candidatada.component.html',
  styleUrl: './vaga-candidatada.component.css',
})
export class VagaCandidatadaComponent {
  constructor() {
    console.log('CardVagasComponent inicializado');
  }

  ngOnInit(): void {
    console.log('Dados do card:', this.card);
  }

  @Input({ required: true }) card!: VerVagaProfissional;

  readonly dialog = inject(MatDialog);

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogVagasCandidatadasComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
