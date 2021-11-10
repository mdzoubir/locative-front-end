import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MaisonService} from "../../../services/maison.service";
import {Maison} from "../../../moduls/maison";
import {ReservationService} from "../../../services/reservation.service";
import {Reservation} from "../../../moduls/reservation";

declare const google: any;

@Component({
  selector: 'app-client-maps',
  templateUrl: './client-homes.component.html',
})
export class ClientHomesComponent implements OnInit {

  maison!: Maison;
  lng : string;
  lat : string;
  reservations: Reservation[]=[];

  constructor(
    private maisonService: MaisonService,
    private route: ActivatedRoute,
    private reservationService: ReservationService
  ) { }


  ngOnInit() {
    this.getMaison();
    this.getReservations();
  }


  getReservations(){
    let id = this.route.snapshot.params.id;
    this.reservationService.getAllByMaisonId(id).subscribe(
      res => {
        this.reservations = res;
      }
    )
  }

  maps(){
    let map = document.getElementById("map-canvas");
    let lat = this.maison.latitude;
    let lng = this.maison.longitude;

    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    map = new google.maps.Map(map, mapOptions);

    new google.maps.Marker(
      {
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
      });
  }

  getMaison(){
    let id = this.route.snapshot.params.id;
    this.maisonService.getByMaisonId(id).subscribe(
      (res: Maison) => {
        this.maison = res;
        this.maps();
      }
    );
  }

}
