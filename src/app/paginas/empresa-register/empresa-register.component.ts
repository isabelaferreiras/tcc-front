import { Component } from '@angular/core';
import { NewRegisterEmpresaComponent } from "../../componentes/new-register-empresa/new-register-empresa.component";

@Component({
  selector: 'app-empresa-register',
  standalone: true,
  imports: [NewRegisterEmpresaComponent],
  templateUrl: './empresa-register.component.html',
  styleUrl: './empresa-register.component.css'
})
export class EmpresaRegisterComponent {

}
