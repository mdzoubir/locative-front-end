import { Component, OnInit } from '@angular/core';
import {MaisonService} from '../../../services/maison.service';
import {Maison} from '../../../moduls/maison';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesSuperAdminComponent implements OnInit {

  houses: Maison[];

  constructor(
    private housesService: MaisonService
  ) { }

  ngOnInit(): void {
    this.getAllHouses();
  }

  getAllHouses(){
    this.housesService.getAll().subscribe(res=>{
      this.houses = res;
    })
  }

}
