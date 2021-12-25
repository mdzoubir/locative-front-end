import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {TokenService} from "../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.tokenService.getRole() == "ADMIN" || this.tokenService.getRole() == "SUPERADMIN" || this.tokenService.getRole() == null){
      this.router.navigateByUrl("/");
      return false;
    }
    return true;
  }

}
