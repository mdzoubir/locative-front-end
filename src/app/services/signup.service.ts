import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url: string = `${environment.apiUrl}`;

  constructor(private http : HttpClient) { }

  signUp(data:{firstName: string, lastName: string, email: string, password: string, phoneNumber}){
    return this.http.post(`${this.url}/api/v1/client`, data)
  }
}
