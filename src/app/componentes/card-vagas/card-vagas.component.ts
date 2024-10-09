import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Card, VerVagaProfissional } from '../../interfaces/card';
import {

  MatDialogClose,

} from '@angular/material/dialog';
import { VagaService } from '../../services/vaga.service';


@Component({
  selector: 'app-card-vagas',
  standalone: true,
  imports: [ MatDialogClose],
  templateUrl: './card-vagas.component.html',
  styleUrl: './card-vagas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [VagaService]
})


export class CardVagasComponent implements OnInit{

  constructor(private vagaService: VagaService) {
    console.log('CardVagasComponent inicializado');
  }

  ngOnInit(): void {
    console.log('Dados do card:', this.vaga);
  }

  @Input({required: true}) vaga!: VerVagaProfissional;

  cadastrarNaVaga(vagaId: number) {
    this.vagaService.candidatarNaVaga(Number(localStorage.getItem('id')), vagaId).subscribe({
      next: (response) => {
        console.log('cadastrado com sucesso');
        
      }
    })
  }
  
}
