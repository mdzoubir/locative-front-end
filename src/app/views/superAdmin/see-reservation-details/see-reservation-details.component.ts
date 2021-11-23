import { Component, OnInit } from '@angular/core';
import {EventSettingsModel, View} from '@syncfusion/ej2-angular-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import {ActivatedRoute} from '@angular/router';
import {Maison} from '../../../moduls/maison';
import {MaisonService} from '../../../services/maison.service';

@Component({
  selector: 'app-see-reservation-details',
  templateUrl: './see-reservation-details.component.html',
  styleUrls: ['./see-reservation-details.component.css']
})
export class SeeReservationDetailsComponent implements OnInit {

  id: string;
  maison: Maison;
  latitude: string;
  longitude: string;

  constructor(
    private route: ActivatedRoute,
    private maisonService: MaisonService
  ) {
  }

  ngOnInit(): void {
    this.getMaison();
  }

  public setView: View = 'Month';
  public readonly: boolean = true;
  public setDate: Date = new Date();

  private eventData: DataManager = new DataManager({
    url: 'http://localhost:8080/api/v1/reservation/' + this.route.snapshot.paramMap.get('id'),
    adaptor: new WebApiAdaptor,
    crossDomain: true,
  })

  public eventObject: EventSettingsModel = {
    dataSource: this.eventData
  }

  getMaison(){
    this.maisonService.getByMaisonId(this.route.snapshot.paramMap.get('id')).subscribe(res=>{
      this.maison = res;
      this.latitude = this.maison.latitude;
      this.longitude = this.maison.longitude;
      this.maps();
    })
  }

  maps(){
    let map = document.getElementById("map-canvas");
    let lat : number = +this.maison.latitude;
    let lng : number = +this.maison.longitude;

    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    // map = new google.maps.Map(map, mapOptions);

    new google.maps.Marker(
      {
        position: myLatlng,
        map: new google.maps.Map(map, mapOptions),
        animation: google.maps.Animation.DROP,
      });
  }

}

