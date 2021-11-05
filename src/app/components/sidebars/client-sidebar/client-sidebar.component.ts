import { Component, OnInit } from '@angular/core';
import {Client} from "../../../moduls/client";
import {ClientService} from "../../../services/client.service";
import {AccountService} from "../../../services/account.service";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";
import {MaisonService} from "../../../services/maison.service";
import {Maison} from "../../../moduls/maison";

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
})
export class ClientSidebarComponent implements OnInit {

  client?: Client;
  collapseShow = "hidden";
  maisons: Maison[]=[];

  constructor(
    private accountService: AccountService,
    private tokenService : TokenService,
    private router: Router,
    private clientService : ClientService,
    private maisonService : MaisonService,
  ) { }

  ngOnInit() {
    this.getClient();
    this.getAllMaisonByClientId();
  }


  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }


  getClient(){
    this.clientService.getClient().subscribe((res: Client) => {
      this.client = res;
    });
  }


  logout(){
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl("/auth/login");
  }

  getAllMaisonByClientId(){
    this.maisonService.getMaisonByClientId().subscribe(
      res => {
        this.maisons = res;
      }
    )
  }

  openTab = true;
  toggleTabs(){
    this.getAllMaisonByClientId();
    this.openTab = !this.openTab;
  }


}
