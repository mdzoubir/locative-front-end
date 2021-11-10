import { Component, OnInit } from '@angular/core';
import {MaisonService} from '../../../services/maison.service';
import {ActivatedRoute} from '@angular/router';
import {Maison} from '../../../moduls/maison';

declare const google: any;

@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css']
})
export class AllHousesComponent implements OnInit {
  maisons: Maison[];
   constructor(
    private houseService: MaisonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getHouses();
    this.maps();
  }

  getHouses(){
    const id = this.route.snapshot.paramMap.get('id');
    this.houseService.getAllByClintId(id).subscribe(res=>{
      this.maisons = res;
    })
  }


  maps(){
    let map = document.getElementById("map-canvas");
    let lat = map.getAttribute("data-lat");
    let lng = map.getAttribute("data-lng");

    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#feb2b2" }, { visibility: "on" }],
        },
      ],
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

}
