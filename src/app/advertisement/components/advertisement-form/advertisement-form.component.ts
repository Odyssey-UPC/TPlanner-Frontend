import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { TouristService } from 'src/app/tourist-service/models/tourist-service';
import { TouristServiceService } from 'src/app/tourist-service/services/tourist-service.service';
import { AdvertisementService } from '../../services/advertisement.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-advertisement-form',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css']
})
export class AdvertisementFormComponent {


  constructor(private touristServiceService: TouristServiceService, private advertisementService: AdvertisementService){}

  adName!: string
  adAmount!: string
  adImage!: string
  adTuristService!: string;
  turistServices!: TouristService[] 

  nameControl = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  amountControl = new FormControl('', [Validators.required, Validators.min(100)]);
  serviceControl = new FormControl('', [Validators.required]);

  ngOnInit(){
    let tourist_provider_id: number = +window.localStorage.getItem("currentUserId")!
    this.getAllTuristServicesByTuristProviderId(tourist_provider_id);
  }

  getAllTuristServicesByTuristProviderId(id: number){
    this.touristServiceService.getTouristServiceByTouristProviderId(id).subscribe((response: any) => {
      this.turistServices = response.body
    })
  }

  getErrorMessage() {
    if (this.nameControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.nameControl.hasError('maxlength') ? 'name long must be less' : '';
  }

  getAmountErrorMessage() {
    if (this.amountControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.amountControl.hasError('min') ? 'amount must be at least 100' : '';
  }

  getServiceErrorMessage() {
    if (this.serviceControl.hasError('required')) {
      return 'You must enter a value';
    }
    return ""
  }

  createAd(){

    if (this.adName && this.adAmount && this.adTuristService && +this.adAmount!>=100){

      let currentDate = new Date()
      let nextDate: number = currentDate.getUTCDate() +1
      currentDate.setUTCDate(nextDate)

      let advertisement = {
        id: Math.floor(Math.random() * 10000) + 1,
        tourist_provider_id: +window.localStorage.getItem("currentUserId")!,
        name: this.adName,
        thumbnail: "",
        views: 0,
        clicks: 0,
        start_date: Date().toLocaleString(),
        deadline: currentDate.toString(),
        amount: this.adAmount,
      }

      this.advertisementService.createAdvertisement(advertisement).subscribe((response: any) => {  
        if(response.status === 201){
          alert("Successful ad creation")
        }
        else{
          alert("Failed ad creation")
        }
      });

    }
  }
}
