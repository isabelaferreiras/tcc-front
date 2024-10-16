import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Card, VerVagaProfissional } from '../../interfaces/card';
import {

  MatDialogClose,

} from '@angular/material/dialog';
import { VagaService } from '../../services/vaga.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-card-vagas',
  standalone: true,
  imports: [MatDialogClose],
  templateUrl: './card-vagas.component.html',
  styleUrl: './card-vagas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [VagaService],
})
export class CardVagasComponent implements OnInit {
  constructor(private vagaService: VagaService) {}

  ngOnInit(): void {}

  @Input({ required: true }) vaga!: VerVagaProfissional;
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 5000 });
  }

  cadastrarNaVaga(vagaId: number) {
    this.vagaService
      .candidatarNaVaga(Number(localStorage.getItem('profissionalId')), vagaId)
      .subscribe({
        next: (response) => {
          this.openSnackBar('Você se inscreveu na vaga com sucesso!', 'Fechar');
        },
        error: (error) => {
          this.openSnackBar('Vaga com limite alcançado', 'Fechar');
        }
      });
  }
}
