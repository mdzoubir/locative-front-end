import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Admin} from '../../../moduls/admin';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  admins: Admin[];
  p: number = 1;
  searchValue: string;


  constructor(
    private adminService : AdminService
  ) { }


  addAmin = new FormGroup({
    firstName : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]),
    lastName : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]),
    email : new FormControl(null, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
    phoneNumber : new FormControl(null,[ Validators.required, Validators.pattern("[0-9]*")]),
    address : new FormControl(null, Validators.required)
  })

  //button add
  addAdminForm: boolean = false;
  changeStatus(){
    this.addAdminForm =! this.addAdminForm;
  }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  getAllAdmins(){
    this.adminService.getAll().subscribe(res => {
      this.admins = res;
    })
  }

  addNewAdmin() {
    this.adminService.addNewAdmin(this.addAmin.value).subscribe(
      res => window.location.reload()
    );
  }
}
