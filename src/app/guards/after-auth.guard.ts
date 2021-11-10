import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {TokenService} from "../services/token.service";
import {ProfileService} from "../services/profile.service";

@Injectable({
  providedIn: 'root'
})
export class AfterAuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private profileService: ProfileService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

    if (this.tokenService.loggedIn()){
      this.router.navigateByUrl("/profile");
      return false;
    }
    return true;
  }

}
