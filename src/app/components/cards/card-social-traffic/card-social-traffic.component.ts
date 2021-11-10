import { Component, OnInit } from "@angular/core";
import {Maison} from "../../../moduls/maison";
import {MaisonService} from "../../../services/maison.service";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: "app-card-social-traffic",
  templateUrl: "./card-social-traffic.component.html",
})
export class CardSocialTrafficComponent implements OnInit {

  maisons: Maison[]=[];

  constructor(
    private maisonService : MaisonService,
  ) {}

  ngOnInit(): void {
    this.getAllMaisonByAdminId();
  }


  getAllMaisonByAdminId(){
    this.maisonService.getAllMaisonByAdminId().subscribe((res:Maison[])=>{
      this.maisons = res;
    })
  }

}
