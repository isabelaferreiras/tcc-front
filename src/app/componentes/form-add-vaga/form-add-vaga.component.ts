import { Component } from '@angular/core';
import { VagaService } from '../../services/vaga.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-vaga',
  standalone: true,
  imports: [],
  templateUrl: './form-add-vaga.component.html',
  styleUrl: './form-add-vaga.component.css',
  providers: [VagaService]
})
export class FormAddVagaComponent {

  constructor(private vagaService: VagaService, private router: Router) {}

  form = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    empresaId: new FormControl(Number(localStorage.getItem('id'))),
    endereco: new FormGroup({
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required])
    }),
    descricao: new FormControl('', [Validators.required]),
    cargo: new FormControl('', [Validators.required])
  })
}
