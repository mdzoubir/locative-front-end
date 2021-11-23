import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-pages-dropdown",
  templateUrl: "./pages-dropdown.component.html",
})
export class PagesDropdownComponent implements OnInit {
  ngOnInit() {}
  show: boolean= false;
  drop() {
    console.log(this.show)
    this.show =! this.show;
  }
}
