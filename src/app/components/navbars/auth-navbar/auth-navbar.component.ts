import { Component, OnInit } from "@angular/core";
import { Clipboard } from '@angular/cdk/clipboard';
import {AccountService} from "../../../services/account.service";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";
import {ProfileService} from '../../../services/profile.service';


@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;
  content = 'Hello, i am tiny text and copied from somewhere else :)';
  currentUser: null;
  role: string;


  constructor(
    private clipboard: Clipboard,
    private accountService: AccountService,
    private tokenService : TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.length != 0){
      this.role  = this.tokenService.getRole();
      this.accountService.authStatus.subscribe(res => {
        this.currentUser = this.tokenService.getInfo();
      })
    }
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  copyText(){
    this.clipboard.copy("+212662030438");
  }

  logout(){
    this.tokenService.remove();
    this.router.navigateByUrl("/auth/login");
  }
}
