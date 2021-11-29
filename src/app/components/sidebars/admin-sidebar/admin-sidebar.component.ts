import { Component, OnInit } from "@angular/core";
import {AdminService} from "../../../services/admin.service";
import {Admin} from "../../../moduls/admin";
import {TokenService} from '../../../services/token.service';
import {AccountService} from '../../../services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: "app-sidebar",
  templateUrl: "./admin-sidebar.component.html",
})
export class AdminSidebarComponent implements OnInit {
  admin:Admin;
  collapseShow = "hidden";
  constructor(
    private adminService : AdminService,
    private tokenService: TokenService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAdmin();
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  getAdmin(){
    this.adminService.getAdmin().subscribe(res => {
      this.admin = res;
      if (this.admin.firstName == null){
        this.logout();
      }
    })
  }

  logout(){
    this.tokenService.remove();
    this.accountService.changeStatus(false);
    this.router.navigateByUrl("/auth/login");
  }
}
