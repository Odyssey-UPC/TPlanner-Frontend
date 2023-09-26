import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TuristService } from '../models/turist-service';

@Injectable({
  providedIn: 'root'
})
export class TuristServiceService {

  private baseUrl: string = environment.baseURL

  constructor(private http: HttpClient) { }

  getTuristServiceByTouristProviderId(id: number){
    return this.http.get<TuristService>(`${this.baseUrl}/turist_service?tourist_provider_id=${id}`, { observe: 'response' })
  }
}
