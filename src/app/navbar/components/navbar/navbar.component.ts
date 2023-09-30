import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeTab: string = 'home';

  constructor(private router: Router) { }

  navigateTo(route: string): void {
    this.activeTab = route;
    this.router.navigate([route]);
  }
}