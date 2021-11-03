import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url: string = `${environment.apiUrl}`;

  constructor(private http :HttpClient) { }

  contact(data:{fullName: string, email: string, message: string}){
    return this.http.post("http://localhost:8080/api/v1/contact", data);
  }
}
