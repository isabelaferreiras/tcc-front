import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho-empresa',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './cabecalho-empresa.component.html',
  styleUrl: './cabecalho-empresa.component.css'
})
export class CabecalhoEmpresaComponent {

  isMenuOpen: boolean = false;

  // Função para alternar a visibilidade do menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
