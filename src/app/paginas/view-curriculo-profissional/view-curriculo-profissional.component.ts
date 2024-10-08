import { Component } from '@angular/core';
import { CabecalhoEmpresaComponent } from "../../componentes/cabecalho-empresa/cabecalho-empresa.component";
import { ContainerCurriculoComponent } from "../../componentes/container-curriculo/container-curriculo.component";
import { Curriculo } from '../../interfaces/curriculo';
import { curriculoExample } from '../../interfaces/mock-data';

@Component({
  selector: 'app-view-curriculo-profissional',
  standalone: true,
  imports: [CabecalhoEmpresaComponent, ContainerCurriculoComponent],
  templateUrl: './view-curriculo-profissional.component.html',
  styleUrl: './view-curriculo-profissional.component.css'
})
export class ViewCurriculoProfissionalComponent {

  curriculoData: Curriculo; 

  constructor() {
    // Inicializa as propriedades com os dados importados
    this.curriculoData = curriculoExample;
  }

}
