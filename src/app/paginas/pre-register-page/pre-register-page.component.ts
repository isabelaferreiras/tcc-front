import { Component } from '@angular/core';
import { PreRegisterComponent } from "../../componentes/pre-register/pre-register.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pre-register-page',
  standalone: true,
  imports: [PreRegisterComponent, RouterLink],
  templateUrl: './pre-register-page.component.html',
  styleUrl: './pre-register-page.component.css'
})
export class PreRegisterPageComponent {

}
