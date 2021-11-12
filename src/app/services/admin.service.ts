import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Admin} from "../moduls/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http : HttpClient
  ) { }

  getAdmin(): Observable<Admin>{
    return this.http.get<Admin>(`${environment.apiUrl}/api/v1/admin/${localStorage.getItem('userId')}`);
  }

  getAll(): Observable<Admin[]>{
    return this.http.get<Admin[]>(`${environment.apiUrl}/api/v1/admin`);
  }
}
