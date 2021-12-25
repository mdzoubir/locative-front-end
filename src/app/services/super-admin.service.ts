import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {SuperAdmin} from '../moduls/super-admin';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  apiUrl: string = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  getSuperAdmin(id: string): Observable<SuperAdmin>{
    return this.http.get<SuperAdmin>(`${this.apiUrl}/api/v1/superAdmin/${id}`);
  }
}
