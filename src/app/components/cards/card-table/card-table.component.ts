import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../../services/client.service";
import {Client} from "../../../moduls/client";

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  clients: Client[];

  constructor(
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.getAllClient();
  }


  getAllClient(){
    this.clientService.getAllByAdminId().subscribe( (res : Client[]) => {
      this.clients = res;
    })
  }



  drop: boolean = false;
  dropDown(){
    this.drop =! this.drop;
  }

}
