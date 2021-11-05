import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get(`${environment.apiUrl}/profile`);
  }


  set(data: any){
    localStorage.setItem('userId', data.userId);
  }

  handle(data: any){
    this.set(data);
  }

  getUserId(){
    return localStorage.getItem('userId');
  }

}
