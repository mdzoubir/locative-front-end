import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {Client} from '../../../moduls/client';

@Component({
  selector: 'app-cliens',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.getAllClient()
  }

  getAllClient(){
    this.clientService.getAllClient().subscribe(res => {
      this.clients = res;
    })
  }

}
