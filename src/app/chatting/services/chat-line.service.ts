import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ChatLine } from '../models/chat-line';

@Injectable({
  providedIn: 'root'
})
export class ChatLineService {

  private baseUrl: string = environment.baseURL;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getAllChatLines(){
    return this.http.get<ChatLine>(`${this.baseUrl}/chat_line`)
  }

  sendMessage(chat_line: any){
    return this.http.post<ChatLine>(`${this.baseUrl}/chat_line`, JSON.stringify(chat_line), this.httpOptions)
  }

}
