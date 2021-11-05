import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string =  environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(data : {email : string, password : string}){
    return this.http.post(`${this.url}/login`, data);
  }
}
