import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent {
  serviceForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router) {
    this.serviceForm = this.fb.group({
      service_name: ['', Validators.required],
      service_description: ['', Validators.required],
      service_date: ['', Validators.required],
      service_deadline: ['', Validators.required],
      price: ['', Validators.required],
      capacity: ['', Validators.required],
      service_category_id: ['', Validators.required],
      tourist_provider_id: ['', Validators.required],
      thumbnails: ['', Validators.required],
      main_thumbnail: ['', Validators.required],
      content: ['', Validators.required]
    });
  }


  htmlContent: any;
  modulesQuill = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    //[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button
  ]
  };

  onSubmit() {
    if (this.serviceForm.valid) {
      const formData = this.serviceForm.value;
      console.log('Form data submitted:', formData);
      // Aquí puedes enviar los datos a tu servidor o realizar otras acciones.
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  onEditorChanged(event: any): void {
    if(event.html)
    {
      this.htmlContent = event.html;
    }
    console.log(event.html);
  }
  goBack() {
    this.router.navigate(['/home']);
  }
}
