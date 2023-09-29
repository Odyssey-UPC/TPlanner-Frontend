import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TouristServiceThumbnail } from '../models/tourist-service-thumbnail';

@Injectable({
  providedIn: 'root'
})
export class TouristServiceThumbnailService {
  private baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) {}

  getThumbnailByTouristServiceId(id: number): Observable<TouristServiceThumbnail> { 
    return this.http.get<TouristServiceThumbnail>(`${this.baseUrl}/tourist_service_thumbnail?turist_service_id=${id}`);
  }  
}