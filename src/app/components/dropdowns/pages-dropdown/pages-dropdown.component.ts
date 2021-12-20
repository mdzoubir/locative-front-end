import {Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { createPopper } from "@popperjs/core";
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';
import {strict} from 'assert';

@Component({
  selector: "app-pages-dropdown",
  templateUrl: "./pages-dropdown.component.html",
})
export class PagesDropdownComponent implements OnInit {

  isShown: boolean;
  constructor(private router: Router) {
  }

  change : boolean = false;

  ngOnInit() {
    this.isShown = false;

    if(this.router.url.toString().slice(1,9) == "services"){
      this.change = true;
    }else{
      this.change = false;
    }
  }



  toggleShow() {
    this.isShown = ! this.isShown;
  }

}
