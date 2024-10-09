import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriarVaga, VerVaga, VerVagaProfissional } from '../interfaces/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(private http: HttpClient) { }

  criarVaga(body: CriarVaga): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/vagas',
      body
    );
  }

  getAllVagas(): Observable<VerVaga[]> {
    return this.http.get<VerVaga[]>('http://localhost:8080/vagas');
  }

  getAllVagasProfissional(): Observable<VerVagaProfissional[]> {
    return this.http.get<VerVagaProfissional[]>('http://localhost:8080/vagas');
  }

  candidatarNaVaga(profissionalId: number, vagaId: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/profissional/cadastroNaVaga?profissionalId=${profissionalId}&vagaId=${vagaId}`, null)
  }
}
