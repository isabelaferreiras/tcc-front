import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './paginas/login-page/login-page.component';
import { LoginPage2Component } from './paginas/login-page-2/login-page-2.component';
import { NewRegisterComponent } from './componentes/new-register/new-register.component';
import { PreRegisterPageComponent } from './paginas/pre-register-page/pre-register-page.component';
import { ProfissionalRegisterPageComponent } from './paginas/profissional-register-page/profissional-register-page.component';
import { EmpresaRegisterComponent } from './paginas/empresa-register/empresa-register.component';
import { PerfilEmpresaComponent } from './paginas/perfil-empresa/perfil-empresa.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { VagasProfissionalComponent } from './paginas/vagas-profissional/vagas-profissional.component';
import { SobreNosProfissionalComponent } from './paginas/sobre-nos-profissional/sobre-nos-profissional.component';
import { SobreNosEmpresaComponent } from './paginas/sobre-nos-empresa/sobre-nos-empresa.component';
import { VagasEmpresaComponent } from './paginas/vagas-empresa/vagas-empresa.component';
import { CurriculoPageComponent } from './paginas/curriculo-page/curriculo-page.component';
import { VagasDisponiveisComponent } from './paginas/vagas-disponiveis/vagas-disponiveis.component';
import { CandidatosDaVagaComponent } from './paginas/candidatos-da-vaga/candidatos-da-vaga.component';
import { ViewCurriculoProfissionalComponent } from './paginas/view-curriculo-profissional/view-curriculo-profissional.component';
import { AddVagaPageComponent } from './paginas/add-vaga-page/add-vaga-page.component';

export const routes: Routes = [
    {path: 'login-home', component: LoginPageComponent},
    {path: '', redirectTo: '/login-home', pathMatch: 'full'},
    {path: 'login', component: LoginPage2Component},
    {path: 'pre-registro', component: PreRegisterPageComponent},
    {path: 'registro-profissional', component: ProfissionalRegisterPageComponent},
    {path: 'registro-empresa', component: EmpresaRegisterComponent},
    {path: 'perfil-empresa', component: PerfilEmpresaComponent},
    {path: 'perfil-profissional', component: PerfilComponent},
    {path: 'vagas-profissional', component: VagasProfissionalComponent},
    {path: 'sobre-nos-profissional', component: SobreNosProfissionalComponent},
    {path: 'sobre-nos-empresa', component: SobreNosEmpresaComponent},
    {path: 'vagas-empresa', component: VagasEmpresaComponent},
    {path: 'curriculo-page', component: CurriculoPageComponent},
    {path: 'vagas-disponiveis', component: VagasDisponiveisComponent},
    {path: 'candidatos-da-vaga', component: CandidatosDaVagaComponent},
    {path: 'view-curriculo-profissional', component: ViewCurriculoProfissionalComponent},
    {path: 'add-vaga-page', component: AddVagaPageComponent},
];
