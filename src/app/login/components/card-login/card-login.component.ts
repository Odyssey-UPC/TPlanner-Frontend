import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginRequest } from '../../models/login-request';
import { UserService } from '../../services/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent {

  emailFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  hidePassword = true; 
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private loginService: LoginService, private userService: UserService) { }

  login() {
    var email = this.emailFormControl.value;
    var password = this.passwordFormControl.value;

    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      const loginRequest: LoginRequest = { username: email, password: password } as LoginRequest;

      this.loginService.login(loginRequest).subscribe(
        response => {
          const token = response.body.Token;
          console.log(token);

          if (token) {
            sessionStorage.setItem('token', token);

            this.userService.getUserByUsername(email!).subscribe(
              response => {
                const userId = response;
                if (userId) {
                  sessionStorage.setItem('userId',userId);
                }
              },
              error => {
                console.error('Error al obtener el usuario:', error);
              }
            );

            this.router.navigate(['/home']);
          }
        },
        error => {
          console.error('Error durante el inicio de sesión:', error);
        }
      );
    }
  }

  createAccount() {
    this.router.navigate(['/selected-profile']);
  }

  loginWithGoogle() {
  }

  loginWithFacebook() {
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
