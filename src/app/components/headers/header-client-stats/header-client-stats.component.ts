import { Component, OnInit } from '@angular/core';
import {MaisonService} from "../../../services/maison.service";

@Component({
  selector: 'app-header-client-stats',
  templateUrl: './header-client-stats.component.html',
})
export class HeaderClientStatsComponent implements OnInit {

  numberMaison: number = 0;

  constructor(private maisonService: MaisonService) { }

  ngOnInit(): void {
    this.getMaisonByClientId();
  }


  getMaisonByClientId(){
    this.maisonService.getMaisonByClientId().subscribe(res => {
      this.numberMaison = res.length;
    })
  }


}
