import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../../services/client.service";
import {Client} from "../../../moduls/client";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
})
export class UpdateUserProfileComponent implements OnInit {


  client : Client;

  AddMoreInfo = new FormGroup({
    cin: new FormControl(null, [Validators.pattern("[a-zA-Z0-9]{5,10}"), Validators.required]),
    compteNumber: new FormControl(null, Validators.required),
    paymentMethode: new FormControl(null, Validators.required),
  })

  constructor(
      private route: ActivatedRoute,
      private clientService : ClientService
  ) { }

  ngOnInit(): void {
    this.getClient();
  }


  getClient(){
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getById(id).subscribe(res => {
      this.client = res;
    })
  }

  updateClient() {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.updateMoreInfo(this.AddMoreInfo.value, id).subscribe(res =>{
      window.location.reload();
    });
  }
}
