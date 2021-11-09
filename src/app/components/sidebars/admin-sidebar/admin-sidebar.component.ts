import { Component, OnInit } from "@angular/core";
import {AdminService} from "../../../services/admin.service";
import {Admin} from "../../../moduls/admin";

@Component({
  selector: "app-sidebar",
  templateUrl: "./admin-sidebar.component.html",
})
export class AdminSidebarComponent implements OnInit {
  admin:Admin;
  collapseShow = "hidden";
  constructor(
    private adminService : AdminService
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
    })
  }
}
