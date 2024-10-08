import { Component } from '@angular/core';
import { CabecalhoEmpresaComponent } from "../../componentes/cabecalho-empresa/cabecalho-empresa.component";
import { InfoEmpresaComponent } from "../../componentes/info-empresa/info-empresa.component";
import { EnderecoComponent } from "../../componentes/endereco/endereco.component";

@Component({
  selector: 'app-perfil-empresa',
  standalone: true,
  imports: [CabecalhoEmpresaComponent, InfoEmpresaComponent, EnderecoComponent],
  templateUrl: './perfil-empresa.component.html',
  styleUrl: './perfil-empresa.component.css'
})
export class PerfilEmpresaComponent {

}
