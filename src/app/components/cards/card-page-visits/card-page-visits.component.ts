import { Component, OnInit } from "@angular/core";
import {ClientService} from "../../../services/client.service";
import {Client} from "../../../moduls/client";

@Component({
  selector: "app-card-page-visits",
  templateUrl: "./card-page-visits.component.html",
})
export class CardPageVisitsComponent implements OnInit {

  clients: Client[]= [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getAllClientByAdminId();
  }


  getAllClientByAdminId(){
    this.clientService.getClientPage().subscribe((res:Client[]) => {
        this.clients = res;
      }
    );
  }
}
