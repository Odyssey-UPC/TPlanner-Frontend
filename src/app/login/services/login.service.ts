import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  login(loginRequest: LoginRequest) {
    return this.http.post<any>(`${this.apiUrl}/login`, loginRequest, { observe: 'response' });  
  }

  logout() {
    localStorage.removeItem('token');
  }
}
