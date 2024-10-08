import { Component } from '@angular/core';
import { CabecalhoEmpresaComponent } from "../../componentes/cabecalho-empresa/cabecalho-empresa.component";

@Component({
  selector: 'app-sobre-nos-empresa',
  standalone: true,
  imports: [CabecalhoEmpresaComponent],
  templateUrl: './sobre-nos-empresa.component.html',
  styleUrl: './sobre-nos-empresa.component.css'
})
export class SobreNosEmpresaComponent {

}
