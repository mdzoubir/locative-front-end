import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationService} from '../../../services/reservation.service';
import {Reservation} from '../../../moduls/reservation';
import {MaisonService} from '../../../services/maison.service';
import {Maison} from '../../../moduls/maison';
import {FormControl, FormGroup, Validators} from '@angular/forms';

declare const google: any;

@Component({
  selector: 'app-add-reservation-form',
  templateUrl: './add-reservation-form.component.html',
  styleUrls: ['./add-reservation-form.component.css']
})
export class AddReservationFormComponent implements OnInit {

  id: string;
  maison: Maison;
  latitude: string;
  longitude: string;

  constructor(
    private route: ActivatedRoute,
    private maisonService: MaisonService,
    private reservationService: ReservationService,
    private router: Router
  ) { }

  addReservationForm = new FormGroup({
    startAtt : new FormControl(null, Validators.required),
    endAtt : new FormControl(null, Validators.required),
    totalRent : new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getReservation();
  }

  maps(){
    let map = document.getElementById("map-canvas");
    let lat = this.latitude
    let lng = this.longitude;

    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      // styles: [
      //   {
      //     featureType: "administrative",
      //     elementType: "labels.text.fill",
      //     stylers: [{ color: "#444444" }],
      //   },
      //   {
      //     featureType: "landscape",
      //     elementType: "all",
      //     stylers: [{ color: "#f2f2f2" }],
      //   },
      //   {
      //     featureType: "poi",
      //     elementType: "all",
      //     stylers: [{ visibility: "off" }],
      //   },
      //   {
      //     featureType: "road",
      //     elementType: "all",
      //     stylers: [{ saturation: -100 }, { lightness: 45 }],
      //   },
      //   {
      //     featureType: "road.highway",
      //     elementType: "all",
      //     stylers: [{ visibility: "simplified" }],
      //   },
      //   {
      //     featureType: "road.arterial",
      //     elementType: "labels.icon",
      //     stylers: [{ visibility: "off" }],
      //   },
      //   {
      //     featureType: "transit",
      //     elementType: "all",
      //     stylers: [{ visibility: "off" }],
      //   },
      //   {
      //     featureType: "water",
      //     elementType: "all",
      //     stylers: [{ color: "#feb2b2" }, { visibility: "on" }],
      //   },
      // ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker(
      {
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: "Hello World!",
      });

    const contentString =
      '<div class="info-window-content"><h2>Home lacation</h2>' +
      "<p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }

  getReservation(){
  this.maisonService.getByMaisonId(this.id).subscribe(res => {
    this.maison = res;
    this.latitude = this.maison.latitude;
    this.longitude = this.maison.longitude;
    this.maps();
  })
  }

  addReservation() {
    this.reservationService.addReservation(this.addReservationForm.value, this.id).subscribe();
    this.router.navigateByUrl("/admin/reservations");
  }
}
