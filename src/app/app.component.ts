import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppLoginComponent } from './componentes/app-login/app-login.component';
import { LoginPageComponent } from "./paginas/login-page/login-page.component";
import {MatDividerModule} from '@angular/material/divider';
import { LoginPage2Component } from "./paginas/login-page-2/login-page-2.component";
import { PreRegisterPageComponent } from "./paginas/pre-register-page/pre-register-page.component";
import { NewRegisterComponent } from "./componentes/new-register/new-register.component";
import { ProfissionalRegisterPageComponent } from "./paginas/profissional-register-page/profissional-register-page.component";
import { EmpresaRegisterComponent } from "./paginas/empresa-register/empresa-register.component";
import { PerfilComponent } from "./paginas/perfil/perfil.component";
import { VagasProfissionalComponent } from "./paginas/vagas-profissional/vagas-profissional.component";
import { CardVagasComponent } from "./componentes/card-vagas/card-vagas.component";
import { PerfilEmpresaComponent } from "./paginas/perfil-empresa/perfil-empresa.component";
import { DialogoCardComponent } from "./componentes/dialogo-card/dialogo-card.component";
import { SobreNosProfissionalComponent } from "./paginas/sobre-nos-profissional/sobre-nos-profissional.component";
import { SobreNosEmpresaComponent } from "./paginas/sobre-nos-empresa/sobre-nos-empresa.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    AppLoginComponent, LoginPageComponent, LoginPage2Component, PreRegisterPageComponent, NewRegisterComponent, ProfissionalRegisterPageComponent, EmpresaRegisterComponent, PerfilComponent, VagasProfissionalComponent, CardVagasComponent, PerfilEmpresaComponent, DialogoCardComponent, SobreNosProfissionalComponent, SobreNosEmpresaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tcc';
}
