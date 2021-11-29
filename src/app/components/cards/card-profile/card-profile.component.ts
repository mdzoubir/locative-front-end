import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../../services/client.service';
import {Client} from '../../../moduls/client';

@Component({
  selector: "app-card-profile",
  templateUrl: "./card-profile.component.html",
})
export class CardProfileComponent implements OnInit {
  client: Client;
  id : string;

  constructor(
    private route : ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.getClientId();
    this.getClient();
  }


  getClientId(){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getClient(){
    this.clientService.getById(this.id).subscribe(res=>{
      this.client = res;
    })
  }
}
