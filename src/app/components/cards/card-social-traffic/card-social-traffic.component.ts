import { Component, OnInit } from "@angular/core";
import {Maison} from "../../../moduls/maison";
import {MaisonService} from "../../../services/maison.service";
import {ClientService} from "../../../services/client.service";
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: "app-card-social-traffic",
  templateUrl: "./card-social-traffic.component.html",
})
export class CardSocialTrafficComponent implements OnInit {

  maisons: Maison[]=[];

  constructor(
    private maisonService : MaisonService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.getAllMaisonByAdminId();
  }


  getAllMaisonByAdminId(){
    this.maisonService.getLastMaison(this.profileService.getUserId()).subscribe((res:Maison[])=>{
      this.maisons = res;
    })
  }

}
