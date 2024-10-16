import { Component } from '@angular/core';
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { InformacoesProfissionalComponent } from "../../componentes/informacoes-profissional/informacoes-profissional.component";
import { EnderecoComponent } from "../../componentes/endereco/endereco.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CabecalhoComponent, InformacoesProfissionalComponent, EnderecoComponent, RouterLink],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}
