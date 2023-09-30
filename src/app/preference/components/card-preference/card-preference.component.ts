import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-preference',
  templateUrl: './card-preference.component.html',
  styleUrls: ['./card-preference.component.css']
})

export class CardPreferenceComponent {
  constructor(private router: Router) { }

  confirm() {
    this.router.navigate(['/home']);
  }
}
