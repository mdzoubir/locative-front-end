import { Component, OnInit } from '@angular/core';
import {SuperAdminService} from '../../../services/super-admin.service';
import {ProfileService} from '../../../services/profile.service';
import {SuperAdmin} from '../../../moduls/super-admin';
import {TokenService} from '../../../services/token.service';
import {AccountService} from '../../../services/account.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-super-admin-sidebar',
  templateUrl: './super-admin-sidebar.component.html',
  styleUrls: ['./super-admin-sidebar.component.css']
})
export class SuperAdminSidebarComponent implements OnInit {

  superAdmin: SuperAdmin;
  collapseShow = "hidden";
  currentLang: string;

  constructor(
    private superAdminService : SuperAdminService,
    private profileService: ProfileService,
    private tokenService: TokenService,
    private accountService: AccountService,
    private router: Router,
    private translate : TranslateService
  ) {
    this.currentLang = localStorage.getItem('currentLang') || 'fr';
    this.translate.use(this.currentLang);
  }

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


  changeCurrentLang(lang: string){
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    window.scroll(0,0);
  }

}
