import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, LoginResponse } from '../interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(body: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      'http://localhost:8080/auth/login',
      body
    );
  }

  
}
