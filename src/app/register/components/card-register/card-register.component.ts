import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent {
  showErrorMessage = false;
  nacionalidades: string[] = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'Perú', 'Uruguay'];
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  hidePassword = true;
  matcher = new MyErrorStateMatcher();

  registerData = {
    username: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    email: '',
    profileLink: 'https://lowpostactive.com/wp-content/uploads/2019/04/ed35b60f2efc1c22d2524518b74e4190e675e0d004b0144491f1c579a3ebb7_640.jpg',
    firstName: '',
    lastName: '',
    nationality: '',
    gender: '',
  };

  constructor(private router: Router, private httpClient: HttpClient) {}

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  register() {
    // Verificar si las contraseñas coinciden
    if (this.passwordFormControl.value !== this.confirmPasswordFormControl.value) {
      console.error('Las contraseñas no coinciden');
      this.showErrorMessage = true;
      return;
    }

    // Establece las cabeceras de la solicitud
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Realiza la solicitud POST al endpoint
    this.httpClient
      .post<any>(`${environment.baseURL}/api/v1/tourists`, this.registerData, { headers })
      .subscribe(
        (response) => {
          console.log('Registro exitoso:', response);
          // Redirige al usuario a otra página o realiza otras acciones después del registro
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error en el registro:', error);
        }
      );
  }

  login() {
    // Aquí puedes implementar la lógica de inicio de sesión si es necesario
    console.log('Login function called');
  }
}