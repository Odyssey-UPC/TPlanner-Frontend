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
import { ChatSectionComponent } from './chatting/pages/chat-section/chat-section.component';
import { HeaderAdvertisementComponent } from './advertisement/components/header/header.component';
import { AdvertisementSectionComponent } from './advertisement/pages/advertisement-section/advertisement-section.component';
import { AdvertisementFormComponent } from './advertisement/components/advertisement-form/advertisement-form.component';
import { AdvertisementInfoComponent } from './advertisement/components/advertisement-info/advertisement-info.component';
import { AdvertisementDividerComponent } from './advertisement/components/advertisement-divider/advertisement-divider.component';
import { CardLoginComponent } from './login/components/card-login/card-login.component';
import { LogoComponent } from './login/components/logo/logo.component';
import { LoginComponent } from './login/pages/login/login.component';
import { CardRegisterComponent } from './register/components/card-register/card-register.component';
import { RegisterComponent } from './register/pages/register/register.component';
import { CardPreferenceComponent } from './preference/components/card-preference/card-preference.component';
import { PreferencesComponent } from './preference/components/preferences/preferences.component';
import { HeaderHomeComponent } from './home/components/header-home/header-home.component';
import { SeekerHomeComponent } from './home/components/seeker-home/seeker-home.component';
import { FilterHomeComponent } from './home/components/filter-home/filter-home.component';
import { HomeSectionComponent } from './home/pages/home-section/home-section.component';
import { FaqComponent } from './Frequently-Asked-Questions/components/faq/FaqComponent';
import { QuestionFormComponent } from './Frequently-Asked-Questions/pages/question-form/question-form.component';
import {NavbarComponent} from './navbar/components/navbar/navbar.component';
import { DetailsComponent } from './tourist-service/pages/details/details.component';
import { CarouselComponent } from './tourist-service/components/carousel/carousel.component';
import { QuillModule } from 'ngx-quill';
import { NotificationComponent } from './notification/components/notification/notification.component';
import { CardSelectedProfileComponent } from './profile/components/card-selected-profile/card-selected-profile.component';
import { SectionSelectedProfileComponent } from './profile/components/section-selected-profile/section-selected-profile.component';
import { RegisterServiceComponent } from './tourist-service/components/register-service/register-service.component';
import { ItineraryCatalogComponent } from './itinerary/components/itinerary-catalog/itinerary-catalog.component';
import { RegisterTuristProviderComponent } from './register/components/register-turist-provider/register-turist-provider.component';
import { RegisterProviderComponent } from './register/pages/register-provider/register-provider.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { YourItinerariesComponent } from './itinerary/components/your-itineraries/your-itineraries.component';

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
    NavbarComponent,
    DetailsComponent,
    CarouselComponent,
    NotificationComponent,
    CardSelectedProfileComponent,
    SectionSelectedProfileComponent,
    RegisterServiceComponent,
    ItineraryCatalogComponent,
    RegisterTuristProviderComponent,
    RegisterProviderComponent,
    YourItinerariesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    QuillModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
