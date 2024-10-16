import { Component, inject, Input } from '@angular/core';
import { EmpresaCardDialogComponent } from "../empresa-card-dialog/empresa-card-dialog.component";
import { Card, VerVaga } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { cardExample, empresaExample, enderecoExample } from '../../interfaces/mock-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-card-empresa',
  standalone: true,
  imports: [EmpresaCardDialogComponent],
  templateUrl: './dialogo-card-empresa.component.html',
  styleUrl: './dialogo-card-empresa.component.css',
})
export class DialogoCardEmpresaComponent {
  @Input() vaga!: VerVaga;

  data = inject(MAT_DIALOG_DATA);
  constructor() {}
}
