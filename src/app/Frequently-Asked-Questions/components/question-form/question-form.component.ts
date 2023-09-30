
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FaqComponent } from '../faq/FaqComponent';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  title: string = '';
  message: string = '';
  dialog: any;
  constructor(private router: Router) { }
  onSubmit(): void {
    this.router.navigate(['/faq']);
    const dialogRef = this.dialog.open(FaqComponent, {
      width: '400px',
      data: {},
      disableClose: true,});
    }
  onCancel(): void {
    this.router.navigate(['/faq']);
    const dialogRef = this.dialog.open(FaqComponent, {
      width: '400px',
      data: {},
      disableClose: true,});
  }
}
