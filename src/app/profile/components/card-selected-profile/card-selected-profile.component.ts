import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-selected-profile',
  templateUrl: './card-selected-profile.component.html',
  styleUrls: ['./card-selected-profile.component.css']
})
export class CardSelectedProfileComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() redirectUrl!: string;
}