import { Component, OnInit } from '@angular/core';
import {SuperAdminService} from '../../../services/super-admin.service';
import {ProfileService} from '../../../services/profile.service';
import {SuperAdmin} from '../../../moduls/super-admin';
import {TokenService} from '../../../services/token.service';
import {AccountService} from '../../../services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-super-admin-sidebar',
  templateUrl: './super-admin-sidebar.component.html',
  styleUrls: ['./super-admin-sidebar.component.css']
})
export class SuperAdminSidebarComponent implements OnInit {

  superAdmin: SuperAdmin;
  collapseShow = "hidden";

  constructor(
    private superAdminService : SuperAdminService,
    private profileService: ProfileService,
    private tokenService: TokenService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSuperAdmin();
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  getSuperAdmin(){
    this.superAdminService.getSuperAdmin(this.profileService.getUserId()).subscribe(res=>{
      this.superAdmin = res;
      if (this.superAdmin == null){
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
