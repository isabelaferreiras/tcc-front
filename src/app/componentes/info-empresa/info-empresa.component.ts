import { Component } from '@angular/core';

@Component({
  selector: 'app-info-empresa',
  standalone: true,
  imports: [],
  templateUrl: './info-empresa.component.html',
  styleUrl: './info-empresa.component.css'
})
export class InfoEmpresaComponent {

  habilitarInput: boolean = true;

  enableInput() {
    this.habilitarInput = !this.habilitarInput;
    console.log('Habilitar Input:', this.habilitarInput);
  }
}
