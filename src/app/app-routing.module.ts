import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatSectionComponent } from './chatting/pages/chat-section/chat-section.component';
import { AdvertisementSectionComponent } from './advertisement/pages/advertisement-section/advertisement-section.component';
import { LoginComponent } from './login/pages/login/login.component';

import { PreferencesComponent } from './preference/components/preferences/preferences.component';
import { HomeSectionComponent } from './home/pages/home-section/home-section.component';
import { FaqComponent } from './Frequently-Asked-Questions/components/faq/FaqComponent';
import { QuestionFormComponent } from './Frequently-Asked-Questions/pages/question-form/question-form.component';
import { DetailsComponent } from './tourist-service/pages/details/details.component';
import { SectionSelectedProfileComponent } from './profile/components/section-selected-profile/section-selected-profile.component';
import { RegisterTouristProviderComponent } from './register/components/register-tourist-provider/register-tourist-provider.component';
import { RegisterTouristComponent } from './register/components/register-tourist/register-tourist.component';
const routes: Routes = [
  {path: "register-tourist", component:RegisterTouristComponent},
  {path: "register-tourist-provider", component:RegisterTouristProviderComponent},
  {path: "selected-profile", component: SectionSelectedProfileComponent},
  {path: "preferences", component:PreferencesComponent},
  {path: "login", component:LoginComponent},
  {path: "chat", component: ChatSectionComponent},
  {path: "advertisement", component: AdvertisementSectionComponent},
  {path: "home", component: HomeSectionComponent},
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "question-form", component: QuestionFormComponent },
  {path: "faq", component:FaqComponent},
  {path: "tourist-service/details/:id", component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
