import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../../services/reservation.service';
import {Reservation} from '../../../moduls/reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  p: number = 1;
  reservations: Reservation[];

  constructor(
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.getAllReservation()
  }

  getAllReservation(){
    this.reservationService.getAllReservation().subscribe(res =>{
      this.reservations = res
    })
  }

}
