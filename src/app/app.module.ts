import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material.module';
import { HeaderComponent } from './chatting/components/header/header.component';
import { BubbleChatComponent } from './chatting/components/bubble-chat/bubble-chat.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatLinesComponent } from './chatting/components/chat-lines/chat-lines.component';
import { InputMessageComponent } from './chatting/components/input-message/input-message.component';
import { ChatSectionComponent } from './chatting/components/chat-section/chat-section.component';
import { HeaderAdvertisementComponent } from './advertisement/components/header/header.component';
import { AdvertisementSectionComponent } from './advertisement/components/advertisement-section/advertisement-section.component';
import { AdvertisementFormComponent } from './advertisement/components/advertisement-form/advertisement-form.component';
import { AdvertisementInfoComponent } from './advertisement/components/advertisement-info/advertisement-info.component';
import { AdvertisementDividerComponent } from './advertisement/components/advertisement-divider/advertisement-divider.component';
import { CardLoginComponent } from './login/components/card-login/card-login.component';
import { LogoComponent } from './login/components/logo/logo.component';
import { LoginComponent } from './login/components/login/login.component';
import { CardRegisterComponent } from './register/components/card-register/card-register.component';
import { RegisterComponent } from './register/components/register/register.component';
import { CardPreferenceComponent } from './preference/components/card-preference/card-preference.component';
import { PreferencesComponent } from './preference/components/preferences/preferences.component';
import { HeaderHomeComponent } from './home/components/header-home/header-home.component';
import { SeekerHomeComponent } from './home/components/seeker-home/seeker-home.component';
import { FilterHomeComponent } from './home/components/filter-home/filter-home.component';
import { HomeSectionComponent } from './home/components/home-section/home-section.component';
import { FaqComponent } from './Frequently-Asked-Questions/components/faq/FaqComponent';
import { QuestionFormComponent } from './Frequently-Asked-Questions/components/question-form/question-form.component';
import {NavbarComponent} from './navbar/components/navbar/navbar.component';  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BubbleChatComponent,
    ChatLinesComponent,
    InputMessageComponent,
    ChatSectionComponent,
    HeaderAdvertisementComponent,
    AdvertisementSectionComponent,
    AdvertisementFormComponent,
    AdvertisementInfoComponent,
    AdvertisementDividerComponent,
    CardLoginComponent,
    LogoComponent,
    LoginComponent,
    CardRegisterComponent,
    RegisterComponent,
    CardPreferenceComponent,
    PreferencesComponent,
    HeaderHomeComponent,
    SeekerHomeComponent,
    FilterHomeComponent,
    HomeSectionComponent,
    FaqComponent,
    QuestionFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
