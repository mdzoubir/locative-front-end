import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../services/admin.service";
import {Admin} from "../../../moduls/admin";

@Component({
  selector: 'app-card-profile-admin',
  templateUrl: './card-profile-admin.component.html',
  styleUrls: ['./card-profile-admin.component.css']
})
export class CardProfileAdminComponent implements OnInit {

  admin : Admin;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getAdmin();
  }

  getAdmin(){
    this.adminService.getAdmin().subscribe(res => {
      this.admin = res;
    })
  }

}
