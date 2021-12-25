import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl: string = "http://localhost:8080";

  constructor(private http :HttpClient) { }

  contact(data:{fullName: string, email: string, message: string}){
    return this.http.post(`${this.apiUrl}/api/v1/contact`, data);
  }
}
