import { Component } from '@angular/core';
import { CabecalhoEmpresaComponent } from '../../componentes/cabecalho-empresa/cabecalho-empresa.component';
import { FormAddVagaComponent } from '../../componentes/form-add-vaga/form-add-vaga.component';

@Component({
  selector: 'app-add-vaga-page',
  standalone: true,
  imports: [CabecalhoEmpresaComponent, FormAddVagaComponent],
  templateUrl: './add-vaga-page.component.html',
  styleUrl: './add-vaga-page.component.css'
})
export class AddVagaPageComponent {

}
