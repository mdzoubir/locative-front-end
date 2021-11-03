import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-dinterieur',
  templateUrl: './design-dinterieur.component.html',
  styleUrls: ['./design-dinterieur.component.css']
})
export class DesignDinterieurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }

}
