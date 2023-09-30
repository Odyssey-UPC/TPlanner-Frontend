import { Component } from '@angular/core';
import { AdvertisementService } from '../../services/advertisement.service';
import { Advertisement } from '../../models/advertisement';

@Component({
  selector: 'app-advertisement-divider',
  templateUrl: './advertisement-divider.component.html',
  styleUrls: ['./advertisement-divider.component.css']
})
export class AdvertisementDividerComponent {

  advertisementList!: Advertisement[] 
  touristProviderId: number = +window.localStorage.getItem("currentUserId")!

  constructor(private advertisementService: AdvertisementService){}

  ngOnInit(){
    this.getAdvertisementsBytTouristProviderId(this.touristProviderId)
  }

  getAdvertisementsBytTouristProviderId(id: number){
    this.advertisementService.getAdvertisementsBytTouristProviderId(id).subscribe((response: any) => {
      this.advertisementList = response
    })
  }

}
