import { TouristService } from "src/app/tourist-service/models/tourist-service";
export interface Itinerary {
  itineraryName: string;
  itineraryDescription: string;
  touristServicesIds: TouristService[];
}
