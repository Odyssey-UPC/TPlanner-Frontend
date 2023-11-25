import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itinerary } from '../models/itinerary';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private apiUrl = `${environment.baseURL}/api/v1/travelItineraries`;

  constructor(private http: HttpClient) { }

  getItineraries(): Observable<Itinerary[]> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Itinerary[]>(this.apiUrl, { headers });
  }
}
