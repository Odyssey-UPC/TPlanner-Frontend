import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advertisement-info',
  templateUrl: './advertisement-info.component.html',
  styleUrls: ['./advertisement-info.component.css']
})
export class AdvertisementInfoComponent {

  @Input()
  name!: string

  @Input()
  views!: number

  @Input()
  clicks!: number

  @Input()
  amount!: number

  @Input()
  serviceName!: string

  @Input()
  redirectTo!: string

  cpv!: number 

  ngOnInit(){
    this.cpv = this.clicks/this.views
  }
  

}
