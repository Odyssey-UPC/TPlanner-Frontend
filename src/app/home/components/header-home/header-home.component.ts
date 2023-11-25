import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/login/models/user';
import { UserService } from 'src/app/login/services/user.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {

  user! : User;
  mostrarInfo: boolean = false;
  
  mostrarOcultarInfo() {
    this.mostrarInfo = !this.mostrarInfo;
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    return this.userService.getUserById(Number(sessionStorage.getItem('userId'))).subscribe(
      response => {
        this.user = response;
      },
      error => {
        console.error('Error al obtener el usuario:', error);
      }
    );
  }

  logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

}
