import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  hidePassword = true; // Variable para ocultar/mostrar contraseña
  matcher = new MyErrorStateMatcher();

  // Métodos para las acciones de los botones
  login() {
    // Agregar lógica de inicio de sesión aquí
  }

  createAccount() {
    // Agregar lógica para crear una nueva cuenta aquí
  }

  loginWithGoogle() {
    // Agregar lógica para iniciar sesión con Google aquí
  }

  loginWithFacebook() {
    // Agregar lógica para iniciar sesión con Facebook aquí
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
