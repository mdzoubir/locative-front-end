import { Component, OnInit } from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignupService} from "../../../services/signup.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {

  constructor(private signupService: SignupService) {}

  ngOnInit(): void {}

  signupForm = new FormGroup({
    firstName : new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastName : new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email : new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
    phoneNumber : new FormControl(null, Validators.required),
    address : new FormControl(null, Validators.required)
  })

  data: string;
  signup() {
    this.signupService.signUp(this.signupForm.value).subscribe(res => console.log(res))
    this.data = "you can log in new";
    this.signupForm.reset();
  }
}
