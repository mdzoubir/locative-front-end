import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contactForm = new FormGroup({
    fullName : new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-ZàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\\s]+$")]),
    email : new FormControl(null, [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    message: new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
  }

  sendMsg(){
    this.contactService.contact(this.contactForm.value).subscribe();
    this.done = "your message sent";
    this.contactForm.get('fullName').setValue("");
    this.contactForm.get('email').setValue("");
    this.contactForm.get('message').setValue("");
    this.contactForm.reset();
  }

  done: string;


}
