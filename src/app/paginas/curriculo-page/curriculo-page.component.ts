import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { TabCurriculoComponent } from "../../componentes/tab-curriculo/tab-curriculo.component";

@Component({
  selector: 'app-curriculo-page',
  standalone: true,
  imports: [RouterLink, CabecalhoComponent, TabCurriculoComponent],
  templateUrl: './curriculo-page.component.html',
  styleUrl: './curriculo-page.component.css'
})
export class CurriculoPageComponent {

}
