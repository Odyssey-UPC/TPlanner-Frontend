import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatSectionComponent } from './chatting/components/chat-section/chat-section.component';
import { AdvertisementSectionComponent } from './advertisement/components/advertisement-section/advertisement-section.component';
import { HomeSectionComponent } from './home/components/home-section/home-section.component';

const routes: Routes = [
  {path: "chat", component: ChatSectionComponent},
  {path: "advertisement", component: AdvertisementSectionComponent},
  {path: "home", component: HomeSectionComponent},
  {path: "", redirectTo: "chat", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
