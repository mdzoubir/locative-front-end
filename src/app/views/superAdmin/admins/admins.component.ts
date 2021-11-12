import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Admin} from '../../../moduls/admin';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  admins: Admin[];

  constructor(
    private adminService : AdminService
  ) { }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  getAllAdmins(){
    this.adminService.getAll().subscribe(res => {
      this.admins = res;
    })
  }

}
