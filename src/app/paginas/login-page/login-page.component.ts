import { Component } from '@angular/core';
import { AppLoginComponent } from '../../componentes/app-login/app-login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [AppLoginComponent, RouterOutlet],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
