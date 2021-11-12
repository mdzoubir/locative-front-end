import { Component, OnInit } from "@angular/core";
import {ClientService} from "../../../services/client.service";
import {Client} from "../../../moduls/client";
import {ReservationService} from '../../../services/reservation.service';
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {

  clients: Client[] = [];
  reservation: number;

  constructor(
    private clientService: ClientService,
    private reservationService: ReservationService,
    private profileService: ProfileService
    ) {}

  ngOnInit(): void {
    this.getAllClient();
    this.getAllReservation();
  }

  getAllReservation(){
    this.reservationService.getAllByAdminId(this.profileService.getUserId()).subscribe(res =>{
      this.reservation = res.length;
    })
  }


  getAllClient(){
    this.clientService.getAllClient().subscribe(res => {
      this.clients = res;
    })
  }
}
