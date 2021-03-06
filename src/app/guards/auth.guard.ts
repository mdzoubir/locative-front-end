import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {TokenService} from "../services/token.service";
import {AccountService} from "../services/account.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private accountService: AccountService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    if (!this.tokenService.loggedIn()){
      this.tokenService.remove();
      this.accountService.changeStatus(false);
      this.router.navigateByUrl("/auth/login");
      return false;
    }
    return true;
  }

}
