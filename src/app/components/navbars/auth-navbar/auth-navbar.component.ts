import { Component, OnInit } from "@angular/core";
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;
  content = 'Hello, i am tiny text and copied from somewhere else :)';

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  copyText(){
    this.clipboard.copy("+212662030438");
    console.log("copie text")
  }
}
