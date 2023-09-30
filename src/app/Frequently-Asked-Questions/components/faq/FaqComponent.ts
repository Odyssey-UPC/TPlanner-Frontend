import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FaqItem } from '../../models/send-question';
import { QuestionFormComponent } from '../question-form/question-form.component';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  questions: FaqItem[] = [
    { question: 'What will happen when you register?', answer: '<br>1. You create an account and register as a tourist or a tourism company. <br> <br> 2. You can update the calendar and prices, and confirm that the reservation information is correct. <br> <br> 3. When you go to the home page, you can open the search section in the navigation bar to look for tours, hotels, activities, etc.<br> <br>' },
    
    { question: "Will I be able to update my registration information later?", answer: "<br>Yes, you can update your registration information at any time. Simply log into your account and navigate to the profile or settings section to make the necessary changes.<br> <br>" },
    
    { question: "What do I get from purchasing the premium service?", answer: "<br>Purchasing the premium service grants you access to a range of exclusive features, such as advanced analytics, priority customer support, and ad-free browsing. Enjoy an enhanced experience with our premium subscription.<br> <br>" },

    { question: "What happens if I cancel my reservation?", answer: "<br>If you cancel your reservation, please refer to our cancellation policy. Depending on the timing of the cancellation, there may be a refund or a cancellation fee. Be sure to review the terms and conditions associated with your reservation.<br> <br>" },

    { question: "What happens if a customer causes any damage to my business?", answer: "<br>In the event that a customer causes damage to your business, we recommend documenting the incident and contacting our support team. Depending on the situation, we may assist in resolving the issue, and our dispute resolution process will be initiated to determine a fair resolution for both parties involved.<br> <br>" },
  ];
  dialog: any;

  constructor(private router: Router) { }


  toggleAnswer(index: number) {
    if (this.questions[index].answer) {
      this.questions[index].showAnswer = !this.questions[index].showAnswer;
      this.questions[index].answerHeight = this.questions[index].showAnswer ? this.getAnswerHeight(index) : 0;
    }
  }

  private getAnswerHeight(index: number): number {

    const answerElement = document.querySelectorAll('.answer p')[index];
    return answerElement ? answerElement.clientHeight : 0;
  }

  openQuestionForm() {

    this.router.navigate(['/question-form']);
    // app-routing.module.ts

const dialogRef = this.dialog.open(QuestionFormComponent, {
  width: '400px',
  data: {},
  disableClose: true, // Evita que se cierre haciendo clic fuera del cuadro de diálogo
});


  }





}
