import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TouristService } from '../models/tourist-service';

@Injectable({
  providedIn: 'root'
})
export class TouristServiceService {

  private baseUrl: string = environment.baseURL

  constructor(private http: HttpClient) { }

  getAllTouristServices() {
    return this.http.get<TouristService>(`${this.baseUrl}/tourist_service`, { observe: 'response' });
  } 

  getTouristServiceByTouristProviderId(id: number){
    return this.http.get<TouristService>(`${this.baseUrl}/tourist_service?tourist_provider_id=${id}`, { observe: 'response' })
  }

  getTouristServicesByCategory(categoryId: number): Observable<TouristService[]> {
    return this.http.get<TouristService[]>(`${this.baseUrl}/tourist_service?service_category_id=${categoryId}`);
  }

}