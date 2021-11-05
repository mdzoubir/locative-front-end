import { Component, OnInit } from "@angular/core";
import {ClientService} from "../../services/client.service";
import {Client} from "../../moduls/client";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {

  client?: Client;

  constructor(
    private clientService : ClientService,
    ) {}

  ngOnInit(): void {
    this.getClient();
  }




  getClient(){
    this.clientService.getClient().subscribe((res: Client) => {
      this.client = res;
    });
  }

}
