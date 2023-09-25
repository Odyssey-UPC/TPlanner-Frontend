import { Component }from '@angular/core';
import { ChatLineService } from '../../services/chat-line.service';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css']
})
export class InputMessageComponent {

  message!: string

  constructor(private chatLineService: ChatLineService){

  }

  sendMessage(){
    if (this.message){
      
      let chatLinesLength = 0

      this.chatLineService.getAllChatLines().subscribe((response: any) => {
        chatLinesLength += response.size + 1
      })

      let chat_line = {
        id: chatLinesLength,
        chat_tourist_provider_id: 201,
        chat_tourist_id: 101,
        from: +window.localStorage.getItem("currentUserId")!,
        to: +window.localStorage.getItem("userWithChatting")!,
        message: this.message,
        date: Date().toLocaleString()
      }

      this.chatLineService.sendMessage(chat_line).subscribe((response: any) => {
        this.reloadPage()
      })
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

}
