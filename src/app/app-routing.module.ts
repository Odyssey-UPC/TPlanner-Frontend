import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatSectionComponent } from './chatting/components/chat-section/chat-section.component';
import { AdvertisementSectionComponent } from './advertisement/components/advertisement-section/advertisement-section.component';
import { HomeSectionComponent } from './home/components/home-section/home-section.component';
import { FaqComponent } from './Frequently-Asked-Questions/components/faq/FaqComponent';
import { QuestionFormComponent } from './Frequently-Asked-Questions/components/question-form/question-form.component';


const routes: Routes = [
  {path: "chat", component: ChatSectionComponent},
  {path: "advertisement", component: AdvertisementSectionComponent},
  {path: "home", component: HomeSectionComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "question-form", component: QuestionFormComponent },
  {path: "faq", component:FaqComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
