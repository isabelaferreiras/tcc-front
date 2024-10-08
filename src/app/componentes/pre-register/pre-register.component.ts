import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-register',
  standalone: true,
  imports: [MatButtonToggleModule, FormsModule],
  templateUrl: './pre-register.component.html',
  styleUrl: './pre-register.component.css'
})
export class PreRegisterComponent {

  selectedOption: string = '';

  constructor(private router: Router) {}

  navigate() {
    if (this.selectedOption === 'Empresa') {
      this.router.navigate(['/registro-empresa']);
    } else if (this.selectedOption === 'Profissional') {
      this.router.navigate(['/registro-profissional']);
    } else {
      // Exibir uma mensagem ou tratar o caso em que nenhuma opção foi selecionada
      alert('Por favor, selecione uma opção válida');
    }
  }
}
