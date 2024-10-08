import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { enderecoExample } from '../../interfaces/mock-data';
import { CriarEmpresa } from '../../interfaces/empresa';

@Component({
  selector: 'app-new-register-empresa',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, ReactiveFormsModule],
  templateUrl: './new-register-empresa.component.html',
  styleUrl: './new-register-empresa.component.css'
})
export class NewRegisterEmpresaComponent {

  constructor(private registerService: RegisterService, private router: Router) {}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    nomeEmpresa: new FormControl('', [Validators.required]),
    endereco: new FormGroup({
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required])
    }),
    descricao: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required]), 
    ramo: new FormControl('', [Validators.required]), 
    password: new FormControl('', [Validators.required]) 
  })


  onSubmit() {
    const body: CriarEmpresa = {
      email: this.form.controls.email.value!,
      nomeEmpresa: this.form.controls.nomeEmpresa.value!,
      endereco: {
        cidade: this.form.controls.endereco.controls.cidade.value!,
        estado: this.form.controls.endereco.controls.estado.value!
      },
      descricao: this.form.controls.descricao.value!,
      cnpj: this.form.controls.cnpj.value!,
      ramo: this.form.controls.ramo.value!,
      password: this.form.controls.password.value!
    }
    this.registerService.registrarEmpresa(body).subscribe({
      next: (response) => {
        this.router.navigate(['/login'])
      },
      error: (error) => {
        console.log(error)
        console.log(body)
      }
    })
  }

}
