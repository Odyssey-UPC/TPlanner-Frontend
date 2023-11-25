import { Component, OnInit } from '@angular/core';
import { TouristServiceService } from 'src/app/tourist-service/services/tourist-service.service';
import { TouristService } from 'src/app/tourist-service/models/tourist-service';
@Component({
  selector: 'app-filter-home',
  templateUrl: './filter-home.component.html',
  styleUrls: ['./filter-home.component.css']
})
export class FilterHomeComponent implements OnInit {
  touristServices: TouristService[] = [];
  touristServiceCategory1: TouristService[] = [];
  touristServiceCategory2: TouristService[] = [];
  touristServiceCategory3: TouristService[] = [];
  touristServiceCategory4: TouristService[] = [];

  constructor(
    private touristServiceService: TouristServiceService,

  ) {}

  ngOnInit(): void {
    this.getAllTouristService()
  }

  private getAllTouristService(){

    this.touristServiceService.getAllTouristServices().subscribe((response: any) =>{

      this.touristServices = response

      this.touristServices.forEach((touristService: TouristService)=>{

      })

      this.touristServiceCategory1 = this.touristServices.filter((object: any) => {
        return object.serviceCategory === "ACTIVITIES";
      })
  
      this.touristServiceCategory2 = this.touristServices.filter((object: any) => {
        return object.serviceCategory === "HOTELS";
      })
  
      this.touristServiceCategory3 = this.touristServices.filter((object: any) => {
        return object.serviceCategory === "RESTAURANTS";
      })
  
      this.touristServiceCategory4 = this.touristServices.filter((object: any) => {
        return object.serviceCategory === "TOURS";
      })

      console.log(this.touristServices)

    })
  }
}
