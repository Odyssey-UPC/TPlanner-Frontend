import { Component, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
  encapsulation: ViewEncapsulation.None // Expose styles globally
})
export class ReviewFormComponent {
  
  stars = Array(5).fill(0);
  selectedRating: number = -1;
  opinion: string = '';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  onStarClick(index: number) {
    // Agregar clase "painted" a las estrellas
for(let i = 0; i <= index; i++) {
  this.renderer.addClass(this.el.nativeElement.querySelectorAll('.rating .star')[i], 'painted');
}

this.selectedRating = index;

   
  }
  

  submitReview() {
    // Handle the submission logic here, e.g., send data to an API.
    console.log('Rating:', this.selectedRating);
    console.log('Opinion:', this.opinion);
  }

  cancelReview() {
    
    this.selectedRating = -1;
    this.opinion = '';

// Quitar clase "painted" de todas las estrellas
for(let i = 0; i < this.stars.length; i++) {
  this.renderer.removeClass(this.el.nativeElement.querySelectorAll('.rating .star')[i], 'painted');
   
  
}
  }
}
