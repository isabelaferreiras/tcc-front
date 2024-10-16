import { Component, Input } from '@angular/core';
import { Profissional } from '../../interfaces/profissional';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-profissional',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './view-profissional.component.html',
  styleUrl: './view-profissional.component.css'
})
export class ViewProfissionalComponent {

  @Input({required: true}) profissional!: Profissional;
}
