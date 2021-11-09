import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../../services/client.service";
import {ActivatedRoute} from "@angular/router";
import {Client} from "../../../moduls/client";

@Component({
  selector: 'app-add-client-home',
  templateUrl: './add-client-home.component.html',
  styleUrls: ['./add-client-home.component.css']
})
export class AddClientHomeComponent implements OnInit {

  id: string;
  client: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserId();
    this.getClient();
  }

  getClient(){
    this.clientService.getById(this.id).subscribe(res =>{
      this.client = res;
    })
  }

  getUserId(){
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
