import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-pages-dropdown",
  templateUrl: "./pages-dropdown.component.html",
})
export class PagesDropdownComponent implements OnInit {

  isShown: boolean;


  ngOnInit() {
    this.isShown = false;
  }

  toggleShow() {
    this.isShown = ! this.isShown;
  }
}
