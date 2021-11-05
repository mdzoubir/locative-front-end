import { Component, OnInit } from "@angular/core";
import {ClientService} from "../../../services/client.service";
import {Client} from "../../../moduls/client";

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit {

  client: Client;

  constructor(
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.getClient();
  }

  getClient(){
    this.clientService.getClient().subscribe(
      res => {
        this.client = res;
      }
    );
  }

}
