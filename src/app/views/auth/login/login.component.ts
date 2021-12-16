import { Component, OnInit } from "@angular/core";
import {LoginService} from "../../../services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";
import {AccountService} from "../../../services/account.service";
import {ProfileService} from "../../../services/profile.service";
import {error} from 'protractor';
import {log} from 'util';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  loginFrom = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),
  })

  constructor(
    private loginService : LoginService,
    private tokenService :TokenService,
    private router: Router,
    private accountService: AccountService,
    private profileService : ProfileService
  ) {}

  ngOnInit(): void {
    this.invalidPassword = false;
  }

  invalidPassword : boolean;

  login(){
    this.loginService.login(this.loginFrom.value).subscribe(
      res => this.handelResponse(res),
          err => this.invalidPassword = true
    )
  }


  handelResponse(res : any){
    this.tokenService.handle(res);
    this.accountService.changeStatus(true);
    this.checkRole();
  }

  checkRole(){
    this.profileService.getProfile().subscribe(res => {
      this.profileService.set(res);
      this.redirectByRole();
    });
  }

  redirectByRole(){
    if (this.tokenService.getRole() == "ADMIN"){
      this.router.navigateByUrl("/admin");
    }else if (this.tokenService.getRole() == "CLIENT"){
      this.router.navigateByUrl("/profile");
    }else if(this.tokenService.getRole() == "SUPERADMIN"){
      this.router.navigateByUrl("/superAdmin");
    }
  }
}
