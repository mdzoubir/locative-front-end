import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../../services/reservation.service';
import {Reservation} from '../../../moduls/reservation';
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  p: number = 1;
  reservations : Reservation[];

  constructor(
    private reservationService : ReservationService,
    private profileService : ProfileService
  ) { }

  ngOnInit(): void {
    this.getAllReservation();
  }

  getAllReservation(){
    this.reservationService.getAllByAdminId(this.profileService.getUserId()).subscribe(res=>{
      this.reservations = res;
    })
  }

}
