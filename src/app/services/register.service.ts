import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriarProfissional } from '../interfaces/profissional';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registrarProfissional(body: CriarProfissional): Observable<any> {
    return this.http.post<any>(
      'http://localhost:9090/profissional',
      body
    );
  }
}
