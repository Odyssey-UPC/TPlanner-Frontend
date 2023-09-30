import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tourist } from '../models/tourist';
import { catchError } from 'rxjs/operators';
import { of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TouristService {
  private baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) {}

  validateUser(email: string, password: string): Observable<Tourist | null> {
    const url = `${this.baseUrl}/tourist?email=${email}&password=${password}`;

    return this.http.get<Tourist[]>(url).pipe(
      map((tourists: Tourist[]) => {
        if (tourists.length > 0) {
          return tourists[0];
        } else {
          return null;
        }
      }),
      catchError((error: any) => {
        console.error('Error al validar usuario', error);
        return of(null); 
      })
    );
  }
}
