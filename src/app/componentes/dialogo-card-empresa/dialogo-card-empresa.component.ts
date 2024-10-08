import { Component } from '@angular/core';
import { EmpresaCardDialogComponent } from "../empresa-card-dialog/empresa-card-dialog.component";
import { Card } from '../../interfaces/card';
import { Empresa } from '../../interfaces/empresa';
import { Endereco } from '../../interfaces/endereco';
import { cardExample, empresaExample, enderecoExample } from '../../interfaces/mock-data';

@Component({
  selector: 'app-dialogo-card-empresa',
  standalone: true,
  imports: [EmpresaCardDialogComponent],
  templateUrl: './dialogo-card-empresa.component.html',
  styleUrl: './dialogo-card-empresa.component.css'
})
export class DialogoCardEmpresaComponent {

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
