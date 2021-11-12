import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../services/message.service';
import {Message} from '../../../moduls/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[];
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAllMessage();
  }

  getAllMessage(){
    this.messageService.getAllMassage().subscribe(res=>{
      this.messages = res;
    })
  }

}
