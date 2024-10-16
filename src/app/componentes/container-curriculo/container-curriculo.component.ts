import { Component, Input } from '@angular/core';
import { Curriculo } from '../../interfaces/curriculo';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-container-curriculo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './container-curriculo.component.html',
  styleUrl: './container-curriculo.component.css'
})
export class ContainerCurriculoComponent {

  @Input({required: true}) curriculo!: Curriculo;

}
