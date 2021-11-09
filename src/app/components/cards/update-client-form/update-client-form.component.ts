import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../../services/client.service";
import {Client} from "../../../moduls/client";

@Component({
  selector: 'app-update-client-form',
  templateUrl: './update-client-form.component.html',
  styleUrls: ['./update-client-form.component.css']
})
export class UpdateClientFormComponent implements OnInit {

  client : Client;

  constructor(
    private route: ActivatedRoute,
    private clietnService : ClientService
  ) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.clietnService.getById(id).subscribe(res => {
      this.client = res;
    })
  }

}
