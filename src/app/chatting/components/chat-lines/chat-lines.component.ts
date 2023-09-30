import { Component } from '@angular/core';
import { ChatLine } from '../../models/chat-line';
import { ChatLineService } from '../../services/chat-line.service';

@Component({
  selector: 'app-chat-lines',
  templateUrl: './chat-lines.component.html',
  styleUrls: ['./chat-lines.component.css']
})
export class ChatLinesComponent {

    chatLines!: Array<ChatLine>
    currentUserId = window.localStorage.getItem("currentUserId")

    constructor(private chatLineService: ChatLineService){
    }

    ngOnInit(){
        this.getAllChatLines()
    }

    getAllChatLines() {
        this.chatLineService.getAllChatLines().subscribe((response : any) =>{
            this.chatLines = response
        })
    }
}
