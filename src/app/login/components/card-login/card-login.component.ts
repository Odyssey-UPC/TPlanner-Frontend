import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { TouristService } from 'src/app/tourist/services/tourist.service';
import { Tourist } from 'src/app/tourist/models/tourist';

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

  constructor(private router: Router, private touristService: TouristService) { }
  

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  hidePassword = true; 
  matcher = new MyErrorStateMatcher();

  login() {
    const email = this.emailFormControl.value as string;
    const password = this.passwordFormControl.value as string;
  
    this.touristService.validateUser(email, password).subscribe(
      (user: Tourist | null) => {
        if (user !== null) {
          window.localStorage.setItem('currentUserId', user.id);
          window.localStorage.setItem('userWithChatting', "201");
          this.router.navigate(['/home']);
        } else {
          console.log('Usuario no válido');
        }
      },
      (error) => {
        console.error('Error al validar usuario', error);
      }
    );
  }
  

  createAccount() {
    this.router.navigate(['/register']);
  }

  loginWithGoogle() {
  }

  loginWithFacebook() {
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
