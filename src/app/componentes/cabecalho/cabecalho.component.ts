import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

  isMenuOpen: boolean = false;

  // Função para alternar a visibilidade do menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
