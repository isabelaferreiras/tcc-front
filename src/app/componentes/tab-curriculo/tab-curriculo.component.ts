import {MatTabsModule} from '@angular/material/tabs';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Idioma } from '../../interfaces/idioma';
import { CurriculoService } from '../../services/curriculo.service';
import { Escolaridade } from '../../interfaces/escolaridade';
import { CriarCurriculo } from '../../interfaces/curriculo';
import { ExperienciaProfissional } from '../../interfaces/experiencia-profissional';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface ExampleTab {
  label: string;
  content: string;
}

export interface Experience {
  cargo: string;
  empresa: string;
  descricao: string;
  cidade: string;
  estado: string;
  dataInicio: Date;
  dataFim: Date;
  salario: number;
}

export interface HabilidadesPessoais {
  habilidade: string;
}

export interface HabilidadesTecnicas {
  habilidade: string;
}

@Component({
  selector: 'app-tab-curriculo',
  standalone: true,
  imports: [MatTabsModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tab-curriculo.component.html',
  styleUrl: './tab-curriculo.component.css',
  providers: [CurriculoService],
})
export class TabCurriculoComponent {
  constructor(private curriculoService: CurriculoService) {}

  // Array para armazenar as coisas
  experiencias: ExperienciaProfissional[] = [];
  habilidadesPessoais: HabilidadesPessoais[] = [];
  habilidadesTecnicas: HabilidadesTecnicas[] = [];
  idiomas: Idioma[] = [];
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 5000 });
  }

  //********seção experiências*******/

  // Método para adicionar uma nova experiência
  adicionarExperiencia() {
    const experiencia: ExperienciaProfissional = {
      cargo: this.form.controls.experienciaProfissional.controls.cargo.value!,
      empresa:
        this.form.controls.experienciaProfissional.controls.empresa.value!,
      endereco: {
        cidade:
          this.form.controls.experienciaProfissional.controls.endereco.controls
            .cidade.value!,
        estado:
          this.form.controls.experienciaProfissional.controls.endereco.controls
            .estado.value!,
      },
      descricao:
        this.form.controls.experienciaProfissional.controls.descricao.value!,
      dataComeco:
        this.form.controls.experienciaProfissional.controls.dataComeco.value!,
      dataFim:
        this.form.controls.experienciaProfissional.controls.dataFim.value!,
      salario:
        this.form.controls.experienciaProfissional.controls.salario.value!,
    };

    this.experiencias.push(experiencia);
    this.form.controls.experienciaProfissional.reset();
    this.openSnackBar('Experiência Profissional adicionada com sucesso!', 'Fechar');
  }

  // Método para remover uma experiência
  removerExperiencia(index: number) {
    this.experiencias.splice(index, 1);
  }

  //******seção habilidades*********

  adicionarHabilidadePessoal() {
    const habilidadePessoal: HabilidadesPessoais = {
      habilidade:
        this.form.controls.habilidadesPessoais.controls.habilidade.value!,
    };
    this.habilidadesPessoais.push(habilidadePessoal);
    this.form.controls.habilidadesPessoais.controls.habilidade.reset();
    this.openSnackBar('Habilidade Pessoal adicionada com sucesso!', 'Fechar');
  }

  removerHabilidadePessoal(index: number) {
    this.habilidadesPessoais.splice(index, 1);
  }

  // ********seção habilidades tecnicas************

  adicionarHabilidadeTecnica() {
    const habilidadeTecnica: HabilidadesTecnicas = {
      habilidade:
        this.form.controls.habilidadesTecnicas.controls.habilidade.value!,
    };
    this.habilidadesTecnicas.push(habilidadeTecnica);
    this.form.controls.habilidadesTecnicas.controls.habilidade.reset();
    this.openSnackBar('Habilidade Técnica adicionada com sucesso!', 'Fechar');
  }

  removerHabilidadeTecnica(index: number) {
    this.habilidadesTecnicas.splice(index, 1);
  }

  //*******seçao idioma******

  adicionarIdioma() {
    const idiomas: Idioma = {
      idioma: this.form.controls.idiomas.controls.idioma.value!,
      nivelLeitura: this.form.controls.idiomas.controls.nivelLeitura.value!,
      nivelConversacao:
        this.form.controls.idiomas.controls.nivelConversacao.value!,
    };
    this.idiomas.push(idiomas);
    this.form.controls.idiomas.reset();
    this.openSnackBar('Idioma adicionado com sucesso!', 'Fechar');
  }

  removerIdioma(index: number) {
    this.idiomas.splice(index, 1);
  }

  form = new FormGroup({
    profissionalId: new FormControl(
      Number(localStorage.getItem('profissionalId'))
    ),
    escolaridade: new FormControl('', [Validators.required]),
    experienciaProfissional: new FormGroup({
      cargo: new FormControl('', [Validators.required]),
      empresa: new FormControl('', [Validators.required]),
      endereco: new FormGroup({
        cidade: new FormControl('', [Validators.required]),
        estado: new FormControl('', [Validators.required]),
      }),
      descricao: new FormControl('', [Validators.required]),
      dataComeco: new FormControl(new Date(), [Validators.required]),
      dataFim: new FormControl(new Date(), [Validators.required]),
      salario: new FormControl(0, [Validators.required]),
    }),
    habilidadesPessoais: new FormGroup({
      habilidade: new FormControl('', [Validators.required]),
    }),
    habilidadesTecnicas: new FormGroup({
      habilidade: new FormControl('', [Validators.required]),
    }),
    idiomas: new FormGroup({
      idioma: new FormControl('', [Validators.required]),
      nivelLeitura: new FormControl('', [Validators.required]),
      nivelConversacao: new FormControl('', [Validators.required]),
    }),
  });

  getFormattedDate(date: Date): string {
    const dataNascimento: Date = new Date(date);

    const dia: string = String(dataNascimento.getDate()).padStart(2, '0');
    const mes: string = String(dataNascimento.getMonth() + 1).padStart(2, '0'); // Os meses começam em 0 no JavaScript
    const ano: number = dataNascimento.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  onSubmit() {
    const body: CriarCurriculo = {
      profissionalId: this.form.controls.profissionalId.value!,
      escolaridade: this.form.controls.escolaridade.value!,
      experienciaProfissional: this.experiencias,
      habilidadesPessoais: this.habilidadesPessoais,
      habilidadesTecnicas: this.habilidadesTecnicas,
      idiomas: this.idiomas,
    };
    this.curriculoService.criarCurriculo(body).subscribe({
      next: (response) => {
        this.openSnackBar('Curriculo criado com sucesso!', 'Fechar');
        this.form.reset();
        this.experiencias = [];
        this.habilidadesPessoais = [];
        this.habilidadesTecnicas = [];
        this.idiomas = [];
      },
    });
  }
}
