import { Component } from '@angular/core';
import { NewRegisterComponent } from "../../componentes/new-register/new-register.component";

@Component({
  selector: 'app-profissional-register-page',
  standalone: true,
  imports: [NewRegisterComponent],
  templateUrl: './profissional-register-page.component.html',
  styleUrl: './profissional-register-page.component.css'
})
export class ProfissionalRegisterPageComponent {

}
