import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { CriarProfissional } from '../../interfaces/profissional';

@Component({
  selector: 'app-new-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink, ReactiveFormsModule],
  templateUrl: './new-register.component.html',
  styleUrl: './new-register.component.css',
  providers: [RegisterService]
})
export class NewRegisterComponent {

  

  constructor(private registerService: RegisterService, private router: Router) {}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl(new Date(), [Validators.required]),
    endereco: new FormGroup({
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required])
    }),
    password: new FormControl('', [Validators.required])
  })

  getFormattedDate(date: Date): string {
    const dataNascimento: Date = new Date(date);
  
    const dia: string = String(dataNascimento.getDate()).padStart(2, '0');
    const mes: string = String(dataNascimento.getMonth() + 1).padStart(2, '0'); // Os meses começam em 0 no JavaScript
    const ano: number = dataNascimento.getFullYear();
  
    return `${dia}/${mes}/${ano}`;
  }

  onSubmit() {
    const body: CriarProfissional = {
      email: this.form.controls.email.value!,
      nome: this.form.controls.nome.value! + ' ' + this.form.controls.sobrenome.value!,
      dataNascimento: this.getFormattedDate(this.form.controls.dataNascimento.value!),
      endereco: {
        cidade: this.form.controls.endereco.controls.cidade.value!,
        estado: this.form.controls.endereco.controls.estado.value!
      },
      password: this.form.controls.password.value!
    }
    this.registerService.registrarProfissional(body).subscribe({
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
