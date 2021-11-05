import { Component, OnInit } from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";
import {AccountService} from "../../../services/account.service";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
})
export class ClientNavbarComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
