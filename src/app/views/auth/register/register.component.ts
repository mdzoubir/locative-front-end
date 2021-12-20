import { Component, OnInit } from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignupService} from "../../../services/signup.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {

  constructor(private signupService: SignupService,
              private router : Router) {}

  ngOnInit(): void {}

  signupForm = new FormGroup({
    firstName : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ'\\)\\(.-]+$")]),
    lastName : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ'\\)\\(.-]+$")]),
    email : new FormControl(null, [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
    phoneNumber : new FormControl(null, [Validators.required, Validators.pattern("^[0-9]{10}")]),
    address : new FormControl(null, Validators.required)
  })

  signup() {
    this.signupService.signUp(this.signupForm.value).subscribe()
    this.signupForm.reset();
    this.router.navigateByUrl("/auth/login");
  }
}
