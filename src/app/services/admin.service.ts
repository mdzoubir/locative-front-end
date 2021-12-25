import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Admin} from "../moduls/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl: string = "http://localhost:8080";

  constructor(
    private http : HttpClient
  ) { }

  getAdmin(): Observable<Admin>{
    return this.http.get<Admin>(`${this.apiUrl}/api/v1/admin/${localStorage.getItem('userId')}`);
  }

  getAll(): Observable<Admin[]>{
    return this.http.get<Admin[]>(`${this.apiUrl}/api/v1/admin`);
  }

  addNewAdmin(data: {firstName: string, lastName: string, email: string, password: string, address: string, phoneNumber: string}): Observable<Admin>{
    return this.http.post<Admin>(`${this.apiUrl}/api/v1/admin`, data)
  }
}
