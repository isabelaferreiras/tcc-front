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
        localStorage.setItem('token', response.token)
        localStorage.setItem('id', response.id.toString())
        this.router.navigate(['/perfil-profissional'])
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
