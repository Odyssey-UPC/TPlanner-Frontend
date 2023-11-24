import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-register-tourist-provider',
  templateUrl: './register-tourist-provider.component.html',
  styleUrls: ['./register-tourist-provider.component.css']
})

export class RegisterTouristProviderComponent {
  nacionalidades: string[] = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'Perú', 'Uruguay'];
  generos: string[] = ['Masculino', 'Femenino', 'Cris', 'Otro'];
  constructor(private router: Router) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  confirmPasswordFormControl = new FormControl('', [
    Validators.required,
  ]);

  hidePassword = true;
  matcher = new MyErrorStateMatcher();
  
  register() {
    this.router.navigate(['/home']);
  }
  
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  createAccount() {
  }
  login(){
    
  }
}
