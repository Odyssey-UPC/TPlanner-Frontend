import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OperationRequest } from '../models/operation-request';
import { ItineraryResponse } from '../models/itinerary-response';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private apiUrl = environment.baseURL;

  constructor(private http: HttpClient) { }

  createOperation(operation: OperationRequest) {
    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token };

    return this.http.post<OperationRequest>(`${this.apiUrl}/api/v1/operations`, operation, { headers });
  }

  filterByTouristIdAndOperationType(touristId: number, operationType: string) {
    const token = sessionStorage.getItem('token');
    const headers = { 'Authorization': 'Bearer ' + token };
    
    return this.http.get<ItineraryResponse[]>(`${this.apiUrl}/api/v1/operations/filterByTouristIdAndOperationType?touristId=${touristId}&operationType=${operationType}`, { headers });
  }

}
