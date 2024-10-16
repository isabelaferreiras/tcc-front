import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriarCurriculo, VerCurriculoProfissional } from '../interfaces/curriculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  constructor(private http: HttpClient) { }

  criarCurriculo(body: CriarCurriculo): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/curriculo',
      body
    );
  }

  // Novo método para obter o currículo de um profissional pelo ID
  //getCurriculoById(id: number): Observable<VerCurriculoProfissional> {
  //  return this.http.get<VerCurriculoProfissional>(`http://localhost:8080/curriculo/${id}`);
  //}
 
}
