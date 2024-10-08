import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor(private http: HttpClient) { }

  mostrarTodasVagas(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/vagas')
  }
}
