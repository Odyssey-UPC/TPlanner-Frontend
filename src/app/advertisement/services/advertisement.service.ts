import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Advertisement } from '../models/advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor(private http: HttpClient) { }

  private myHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  private baseUrl: string = environment.baseURL


  getAdvertisementsBytTouristProviderId(tourist_provider_id: number){
    return this.http.get<Advertisement>(`${this.baseUrl}/advertisement?tourist_provider_id=${tourist_provider_id}`)
  }

  createAdvertisement(advertisement: any){
    return this.http.post<Advertisement>(`${this.baseUrl}/advertisement`, JSON.stringify(advertisement), { headers : this.myHeaders, observe: 'response' })
  }

}
