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
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent {
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
    this.router.navigate(['/preferences']);
  }
  
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  createAccount() {
  }
  login(){
    
  }
}
