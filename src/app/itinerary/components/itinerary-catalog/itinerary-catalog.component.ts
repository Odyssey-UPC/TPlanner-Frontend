import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';
import { Itinerary } from '../../models/itinerary';

@Component({
  selector: 'app-itinerary-catalog',
  templateUrl: './itinerary-catalog.component.html',
  styleUrls: ['./itinerary-catalog.component.css']
})
export class ItineraryCatalogComponent implements OnInit {
  itineraries: Itinerary[] = [];

  constructor(private itineraryService: ItineraryService) { }

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
}