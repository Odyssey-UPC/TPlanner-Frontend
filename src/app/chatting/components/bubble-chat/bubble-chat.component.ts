import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble-chat',
  templateUrl: './bubble-chat.component.html',
  styleUrls: ['./bubble-chat.component.css']
})
export class BubbleChatComponent {

    @Input()
    isFirstPerson!: boolean; 

    @Input()    
    message!: string;

    @Input()
    hour!: string;

}
