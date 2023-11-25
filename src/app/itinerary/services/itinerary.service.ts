import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itinerary } from '../models/itinerary';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private apiUrl = `${environment.baseURL}/itineraries`;

  constructor(private http: HttpClient) { }

  getItineraries(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>(this.apiUrl);
  }
}