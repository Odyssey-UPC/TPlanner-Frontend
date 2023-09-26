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
    AdvertisementFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
