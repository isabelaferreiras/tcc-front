import { Component } from '@angular/core';
import { VagaService } from '../../services/vaga.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CriarVaga } from '../../interfaces/card';

@Component({
  selector: 'app-form-add-vaga',
  standalone: true,
  imports: [ NgIf, ReactiveFormsModule ],
  templateUrl: './form-add-vaga.component.html',
  styleUrl: './form-add-vaga.component.css',
  providers: [VagaService]
})
export class FormAddVagaComponent {

  constructor(private vagaService: VagaService, private router: Router) {}

  /*export interface CriarCurriculo{
    profissionalId: number;
    escolaridade: string;
    experienciaProfissional: ExperienciaProfissional[];
    habilidadesPessoais: HabilidadesPessoais[];
    habilidadesTecnicas: HabilidadesTecnicas[];
    idiomas: Idioma[];
}*/

  form = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    empresaId: new FormControl(Number(localStorage.getItem('id'))),
    endereco: new FormGroup({
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required])
    }),
    descricao: new FormControl('', [Validators.required]),
    cargo: new FormControl('', [Validators.required]),
    limite: new FormControl(false, [Validators.required]),  // Campo booleano
    limiteProfissionais: new FormControl(0, [Validators.required, Validators.min(1)])
  })

  onSubmit() {
    const body: CriarVaga = {
      titulo: this.form.controls.titulo.value!,
      empresaId: this.form.controls.empresaId.value!,
      endereco: {
        cidade: this.form.controls.endereco.controls.cidade.value!,
        estado: this.form.controls.endereco.controls.estado.value!
      },
      descricao: this.form.controls.descricao.value!,
      cargo: this.form.controls.cargo.value!,
      limite: this.form.controls.limite.value!,
      limiteProfissionais: this.form.controls.limite.value! ? this.form.controls.limiteProfissionais.value! : 0 // Limite só é definido se o campo `limite` for true
    }

    this.vagaService.criarVaga(body).subscribe({
      next: (response) => {
        this.router.navigate(['/vagas-empresa'])
      },
      error: (error) => {
        console.log(error)
        console.log(body)
      }
    })
  }
}
