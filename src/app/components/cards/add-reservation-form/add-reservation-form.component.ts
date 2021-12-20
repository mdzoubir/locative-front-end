import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReservationService} from '../../../services/reservation.service';
import {MaisonService} from '../../../services/maison.service';
import {Maison} from '../../../moduls/maison';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventSettingsModel, View} from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';


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

  public setView: View = 'Month';
  public readonly: boolean = true;
  public setDate: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private maisonService: MaisonService,
    private reservationService: ReservationService
  ) { }

  addReservationForm = new FormGroup({
    startTime : new FormControl(null, Validators.required),
    endTime : new FormControl(null, Validators.required),
    totalRent : new FormControl(null, [Validators.required, Validators.min(100)]),
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getReservation();
  }

  private eventData: DataManager = new DataManager({
    url: 'http://localhost:8080/api/v1/reservation/'+this.route.snapshot.paramMap.get('id'),
    adaptor: new WebApiAdaptor,
    crossDomain: true,
  })

  public eventObject: EventSettingsModel = {
    dataSource: this.eventData
  }

  maps(){
    let map = document.getElementById("map-canvas");
    let lat = this.latitude;
    let lng = this.longitude;

    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
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
    this.reservationService.addReservation(this.addReservationForm.value, this.id).subscribe(
      res => window.location.href= 'admin/houses/reservation/'+ this.id
    );

  }
}
