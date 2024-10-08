import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriarVaga } from '../interfaces/card';
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
}
