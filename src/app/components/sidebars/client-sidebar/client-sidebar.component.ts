import { Component, OnInit } from '@angular/core';
import {Client} from "../../../moduls/client";
import {ClientService} from "../../../services/client.service";
import {AccountService} from "../../../services/account.service";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";
import {MaisonService} from "../../../services/maison.service";
import {Maison} from "../../../moduls/maison";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
})
export class ClientSidebarComponent implements OnInit {

  client?: Client;
  collapseShow = "hidden";
  maisons: Maison[]=[];

  currentLang: string;

  constructor(
    private accountService: AccountService,
    private tokenService : TokenService,
    private router: Router,
    private clientService : ClientService,
    private maisonService : MaisonService,
    private translate : TranslateService
  ) {
    if(localStorage.getItem('currentLang') != null){
      this.translate.use(this.currentLang);
    }else{
      this.translate.use("fr");

    }
  }

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
      if (this.client == null){
        this.logout();
      }
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


  changeCurrentLang(lang: string){
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    window.scroll(0,0);
  }


}
