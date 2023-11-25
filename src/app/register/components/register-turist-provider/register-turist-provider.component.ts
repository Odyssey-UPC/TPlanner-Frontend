import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-turist-provider',
  templateUrl: './register-turist-provider.component.html',
  styleUrls: ['./register-turist-provider.component.css'],
})
export class RegisterTuristProviderComponent {
  showErrorMessage = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordMatchValidator(): boolean {
    return this.registerData.password === this.registerData.confirmPassword;
  }
  
  hidePassword = true;
  matcher = new MyErrorStateMatcher();

  registerData = {
    username: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    email: '',
    profileLink: 'https://cdn.discordapp.com/attachments/1037343952694685706/1177053147584282624/image.png?ex=65711b2a&is=655ea62a&hm=44271ac090056319599001c83bf273cf21cdbddb46943cbee77cc73a20182eb9&',
    organizationName: '',
    organizationDescription: 'Mi empresa se encagara de darte un gran servicio, somos lideres en el sector !!',
    websiteLink: 'https://www.javerianacali.edu.co/sites/default/files/styles/image_800x600/public/2022-04/Egresado-turismo-javeriana-cali_0.png.webp?itok=EkqWO9Rt',
    description: '',
  };


  constructor(private router: Router, private httpClient: HttpClient) {}

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  createAccount() {}

  login() {}

  register() {
    // Verificar si las contraseñas coinciden
    if (!this.passwordMatchValidator()) {
      console.error('Las contraseñas no coinciden');
      // Mostrar el mensaje de error
      this.showErrorMessage = true;
      return;
    }

    // Restablecer el estado de la variable si las contraseñas coinciden
    this.showErrorMessage = false;

    // Establece las cabeceras de la solicitud
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Realiza la solicitud POST al endpoint
    this.httpClient
      .post<any>(`${environment.baseURL}/api/v1/touristProviders`, this.registerData, { headers })
      .subscribe(
        (response) => {
          // Aquí puedes redirigir al usuario a otra página o realizar otras acciones después del registro
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error en el registro:', error);
        }
      );
  }
}
