import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPlanner-Frontend';

  constructor(private router: Router) {}

  shouldShowNavbar(): boolean {
    const currentRoute = this.router.url;
    return !['/login', '/register', '/preferences'].includes(currentRoute);
  }
}
