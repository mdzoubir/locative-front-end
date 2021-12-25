import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  login(data : {email : string, password : string}){
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
