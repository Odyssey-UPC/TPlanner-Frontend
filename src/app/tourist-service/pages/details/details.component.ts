import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TouristServiceThumbnailService } from 'src/app/tourist-service-thumbnail/services/tourist-service-thumbnail.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TouristServiceService } from '../../services/tourist-service.service';
import { TouristService } from '../../models/tourist-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  id!: number;
  textEditorContent: string = '';
  touristService!: TouristService;
  givenContent!: SafeHtml;
  thumbnails: string[] = [];

  constructor(private route: ActivatedRoute,
    private touristServiceThumbnailService: TouristServiceThumbnailService,
    private touristServiceService: TouristServiceService,
    private sanitizer: DomSanitizer,
    private router: Router) 
  {}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id")!
      console.log(params.get("id"))
    })

    this.getThumbnails()
    this.getTouristServiceById()
  }

  getThumbnails(){
    this.touristServiceThumbnailService.getThumbnailByTouristServiceId(this.id).subscribe((response: any) =>{
      response.forEach((element: any) => {
        this.thumbnails.push(element.image_link)
      });
    })
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getTouristServiceById(){
    this.touristServiceService.getToursitServiceById(this.id).subscribe((response: any) => {
      this.touristService = response.body
      this.givenContent = this.getSafeHtml(this.touristService.content)
    })
  }

  goBack() {
    this.router.navigate(['/home']);
  }
  

}
