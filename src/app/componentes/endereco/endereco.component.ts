import { Component } from '@angular/core';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.css'
})
export class EnderecoComponent {

  habilitarInput: boolean = true;

  enableInput() {
    this.habilitarInput = !this.habilitarInput;
    console.log('Habilitar Input:', this.habilitarInput);
  }
}
