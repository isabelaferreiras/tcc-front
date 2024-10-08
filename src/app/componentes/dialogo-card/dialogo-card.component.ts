import { Component, Input } from '@angular/core';
import { Endereco } from '../../interfaces/endereco';
import { Empresa } from '../../interfaces/empresa';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-dialogo-card',
  standalone: true,
  imports: [],
  templateUrl: './dialogo-card.component.html',
  styleUrl: './dialogo-card.component.css'
})
export class DialogoCardComponent {

  @Input({required: true}) card!: Card;
  @Input({required: true}) empresa!: Empresa;
  @Input({required: true}) endereco!: Endereco
}
