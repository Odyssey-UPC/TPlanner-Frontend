import { Component, Input } from '@angular/core';
import { interval, Subscription, takeWhile } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  slideIndex: number = 0;
  private alive: boolean = true;
  private subscription!: Subscription;

  @Input()
  slides!: string[]

  ngOnInit(){
    this.startCarousel();
  }

  ngOnDestroy() {
    this.alive = false;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  showSlide(n: number) {
    this.slideIndex = n;
  }

  plusSlides(incrementIn: number){
    if (this.slideIndex + incrementIn > this.slides.length-1) {
      this.slideIndex = 0
    }

    else if (this.slideIndex + incrementIn < 0){
      this.slideIndex = this.slides.length-1
    }

    else{
      this.slideIndex += incrementIn
    }
  }

  startCarousel() {
    this.subscription = interval(5000)
      .pipe(
        takeWhile(() => this.alive)
      )
      .subscribe(() => {
        this.plusSlides(1);
      });
  }

}
