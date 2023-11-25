import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private touristServiceService: TouristServiceService,
    private sanitizer: DomSanitizer,
    private router: Router) 
  {}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id")!
      console.log(params.get("id"))
    })

    this.getTouristServiceById()
  }


  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getTouristServiceById(){
    this.touristServiceService.getToursitServiceById(this.id).subscribe((response: any) => {
      this.touristService = response
      this.givenContent = this.getSafeHtml(this.touristService.content)
    })
  }

  goBack() {
    this.router.navigate(['/home']);
  }
  

}
