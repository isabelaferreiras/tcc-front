import { Component } from '@angular/core';

@Component({
  selector: 'app-informacoes-profissional',
  standalone: true,
  imports: [],
  templateUrl: './informacoes-profissional.component.html',
  styleUrl: './informacoes-profissional.component.css'
})
export class InformacoesProfissionalComponent {

  habilitarInput: boolean = true;

  enableInput() {
    this.habilitarInput = !this.habilitarInput;
    console.log('Habilitar Input:', this.habilitarInput);
  }
}
