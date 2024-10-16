import { Component, Input } from '@angular/core';
import { Card, VerVaga } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { RouterLink } from '@angular/router';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-empresa-card-dialog',
  standalone: true,
  imports: [RouterLink, MatDialogClose],
  templateUrl: './empresa-card-dialog.component.html',
  styleUrl: './empresa-card-dialog.component.css'
})
export class EmpresaCardDialogComponent {

  @Input({required: true}) card!: VerVaga;

  setVagaId() {
    localStorage.setItem('vagaId', String(this.card.id));
  }
}

