import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriarProfissional } from '../interfaces/profissional';
import { Observable } from 'rxjs';
import { CriarEmpresa } from '../interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registrarProfissional(body: CriarProfissional): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/profissional/cadastrarProfissional',
      body
    );
  }

  registrarEmpresa(body: CriarEmpresa): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/empresa/cadastrarEmpresa',
      body
    );
  }
}
