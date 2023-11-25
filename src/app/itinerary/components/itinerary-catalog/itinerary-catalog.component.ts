import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';
import { Itinerary } from '../../models/itinerary';
import { OperationService } from '../../services/operation.service';
import { OperationRequest } from '../../models/operation-request';

@Component({
  selector: 'app-itinerary-catalog',
  templateUrl: './itinerary-catalog.component.html',
  styleUrls: ['./itinerary-catalog.component.css']
})
export class ItineraryCatalogComponent implements OnInit {
  itineraries: Itinerary[] = [];

  constructor(private itineraryService: ItineraryService, private operationService: OperationService) { }

  ngOnInit() {
    this.itineraryService.getItineraries().subscribe(
      (data: Itinerary[]) => {
        this.itineraries = data;
      },
      (error) => {
        console.error('Error fetching itineraries:', error);
      }
    );
  }

  suscribeToItinerary(itineraryId: number) {

    const userId = sessionStorage.getItem('userId');

    const operationRequest: OperationRequest = {
      touristId: Number(userId),
      travelItineraryId: itineraryId,
      operationType: "BOUGHT"
    } as OperationRequest;


    this.operationService.createOperation(operationRequest).subscribe(
      response => {
        alert('successful itinerary subscription');
        console.log(response);
      },
      error => {
        console.error('Error al crear la operacion:', error);
      }
    );  
  }
}
