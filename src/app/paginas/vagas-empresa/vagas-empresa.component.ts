import { Component, inject } from '@angular/core';
import { CabecalhoEmpresaComponent } from "../../componentes/cabecalho-empresa/cabecalho-empresa.component";
import { Router, RouterLink } from '@angular/router';
import { CardEmpresaComponent } from "../../componentes/card-empresa/card-empresa.component";
import { Card, VerVaga } from '../../interfaces/card';
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
import { VagaService } from '../../services/vaga.service';

@Component({
  selector: 'app-vagas-empresa',
  standalone: true,
  imports: [CabecalhoEmpresaComponent, RouterLink, CardEmpresaComponent, NgFor, 
    MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, RouterLink],
  templateUrl: './vagas-empresa.component.html',
  styleUrl: './vagas-empresa.component.css',
  providers: [VagaService]
})
export class VagasEmpresaComponent {

  vagaList: VerVaga[] = []; // Lista de cards (vagas)



  constructor(private vagaService: VagaService, private router: Router) {
    // Inicializa as propriedades com os dados importados

  }

  ngOnInit(): void {
    this.getVagas()
    console.log('Dados enviados para os cards:', this.getVagas);
  }

  getVagas() {
    this.vagaService.verVagaPorEmpresa(Number(localStorage.getItem('empresaId'))).subscribe({
      next: (response) => {
        this.vagaList = response
      }
    })
  }
  

}
