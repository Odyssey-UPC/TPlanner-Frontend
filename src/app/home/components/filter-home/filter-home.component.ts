import { Component, OnInit } from '@angular/core';
import { TouristServiceService } from 'src/app/tourist-service/services/tourist-service.service';
import { TouristService } from 'src/app/tourist-service/models/tourist-service';
import { TouristServiceThumbnailService } from 'src/app/tourist-service-thumbnail/services/tourist-service-thumbnail.service';

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
    private thumbnailService: TouristServiceThumbnailService,

  ) {}

  ngOnInit(): void {
    this.getAllTouristService()
  }

  private getAllTouristService(){
    this.touristServiceService.getAllTouristServices().subscribe((response: any) =>{

      this.touristServices = response.body

      this.touristServices.forEach((touristService: TouristService)=>{

        this.thumbnailService.getThumbnailByTouristServiceId(touristService.id).subscribe((response: any) =>{
          touristService.thumbnails = response
        })

      })

      this.touristServiceCategory1 = this.touristServices.filter((object: any) => {
        return object.service_category_id === 1;
      })
  
      this.touristServiceCategory2 = this.touristServices.filter((object: any) => {
        return object.service_category_id === 2;
      })
  
      this.touristServiceCategory3 = this.touristServices.filter((object: any) => {
        return object.service_category_id === 3;
      })
  
      this.touristServiceCategory4 = this.touristServices.filter((object: any) => {
        return object.service_category_id === 4;
      })

      console.log(this.touristServices)

    })
  }
}
