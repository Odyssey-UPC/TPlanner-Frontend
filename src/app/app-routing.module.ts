import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatSectionComponent } from './chatting/pages/chat-section/chat-section.component';
import { AdvertisementSectionComponent } from './advertisement/pages/advertisement-section/advertisement-section.component';
import { LoginComponent } from './login/pages/login/login.component';
import { RegisterComponent } from './register/pages/register/register.component';
import { PreferencesComponent } from './preference/components/preferences/preferences.component';
import { HomeSectionComponent } from './home/pages/home-section/home-section.component';
import { FaqComponent } from './Frequently-Asked-Questions/components/faq/FaqComponent';
import { QuestionFormComponent } from './Frequently-Asked-Questions/pages/question-form/question-form.component';
import { DetailsComponent } from './tourist-service/pages/details/details.component';
import { SectionSelectedProfileComponent } from './profile/components/section-selected-profile/section-selected-profile.component';
import { RegisterServiceComponent } from './tourist-service/components/register-service/register-service.component';
import { RegisterProviderComponent } from './register/pages/register-provider/register-provider.component';
import { ItineraryCatalogComponent } from './itinerary/components/itinerary-catalog/itinerary-catalog.component';
import { YourItinerariesComponent } from './itinerary/components/your-itineraries/your-itineraries.component';

const routes: Routes = [
  {path: "register-provider", component: RegisterProviderComponent},
  {path: "register-service", component: RegisterServiceComponent},
  {path: "selected-profile", component: SectionSelectedProfileComponent},
  {path: "preferences", component:PreferencesComponent},
  {path: "register", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "chat", component: ChatSectionComponent},
  {path: "advertisement", component: AdvertisementSectionComponent},
  {path: "home", component: HomeSectionComponent},
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "question-form", component: QuestionFormComponent },
  {path: "faq", component:FaqComponent},
  {path: "tourist-service/details/:id", component: DetailsComponent},
  {path: "itinerary-catalog", component: ItineraryCatalogComponent},
  {path: "your-itineraries", component: YourItinerariesComponent},
  {path: "**", redirectTo: "login", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
