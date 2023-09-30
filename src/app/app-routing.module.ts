import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatSectionComponent } from './chatting/components/chat-section/chat-section.component';
import { AdvertisementSectionComponent } from './advertisement/components/advertisement-section/advertisement-section.component';
import { LoginComponent } from './login/components/login/login.component';
import { RegisterComponent } from './register/components/register/register.component';
import { PreferencesComponent } from './preference/components/preferences/preferences.component';

const routes: Routes = [
  {path: "preferences", component:PreferencesComponent},
  {path: "register", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "chat", component: ChatSectionComponent},
  {path: "advertisement", component: AdvertisementSectionComponent},
  {path: "", redirectTo: "preferences", pathMatch: "full"},
  {path: "**", redirectTo: "preferences", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
