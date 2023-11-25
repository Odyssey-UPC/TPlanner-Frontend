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

    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }

    return this.http.get<TouristService>(`${this.baseUrl}/api/v1/touristServices`, { headers });
  }

  getToursitServiceById(id: number){
    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    return this.http.get<TouristService>(`${this.baseUrl}/api/v1/touristServices/${id}`, { headers })
  }

  getTouristServiceByTouristProviderId(id: number){
    return this.http.get<TouristService>(`${this.baseUrl}/api/v1/touristServices?tourist_provider_id=${id}`, { observe: 'response' })
  }

  getTouristServicesByCategory(categoryId: number): Observable<TouristService[]> {
    return this.http.get<TouristService[]>(`${this.baseUrl}/api/v1/touristServices?service_category_id=${categoryId}`);
  }

}