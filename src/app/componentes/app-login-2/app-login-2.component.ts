import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { LoginServiceService } from '../../services/login-service.service';
import { Login } from '../../interfaces/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-login-2',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './app-login-2.component.html',
  styleUrl: './app-login-2.component.css',
  providers: [LoginServiceService]
})
export class AppLogin2Component {

  constructor(private loginService: LoginServiceService, private router: Router) {}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  form = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit() {
    const login: Login = {
      login: this.form.controls.login.value!,
      password: this.form.controls.password.value!
    }
    this.loginService.login(login).subscribe({
      next: (response) => {
        localStorage.clear();
        if (response.role === 'PROFISSIONAL') {
          this.router.navigate(['/perfil-profissional']);
        } else if (response.role === 'EMPRESA') {
          this.router.navigate(['/perfil-empresa']);
        }
        localStorage.setItem('token', response.token)

        if(response.empresaId !== null) {
          localStorage.setItem('empresaId', response.empresaId.toString());
        }

        if(response.profissionalId !== null) {
          localStorage.setItem('profissionalId', response.profissionalId.toString());
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
