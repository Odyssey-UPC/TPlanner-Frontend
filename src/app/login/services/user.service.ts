import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.baseURL;

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string) {

    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }

    return this.http.get<any>(`${this.apiUrl}/api/v1/users/filterByUsername?username=${username}`, { headers });
  }

  getUserById(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }

    return this.http.get<any>(`${this.apiUrl}/api/v1/users/${id}`, { headers });
  }


}
