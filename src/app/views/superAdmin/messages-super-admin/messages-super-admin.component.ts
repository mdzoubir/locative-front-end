import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../services/message.service';
import {Message} from '../../../moduls/message';

@Component({
  selector: 'app-messages-super-admin',
  templateUrl: './messages-super-admin.component.html',
  styleUrls: ['./messages-super-admin.component.css']
})
export class MessagesSuperAdminComponent implements OnInit {

  messages: Message[];
  p: number = 1;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAllMessage();
  }

  getAllMessage(){
    return this.messageService.getAllMassage().subscribe(res =>{
      this.messages = res;
    })
  }

}
