import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Client} from "../moduls/client";
import {Observable} from "rxjs";
import {ProfileService} from "./profile.service";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http : HttpClient,
    private profileSerice: ProfileService) { }

  getClient(): Observable<Client>{
    return this.http.get<Client>(`${environment.apiUrl}/api/v1/client/${this.profileSerice.getUserId()}`);
  }

  updateBasic(data:{firstName: string, lastName: string}): Observable<Client>{
    return this.http.post<Client>(`${environment.apiUrl}/api/v1/client/${this.profileSerice.getUserId()}`, data);
  }

  updateMoreInfo(data:{email: string, address: string, phoneNumber: string}): Observable<Client>{
    return this.http.post<Client>(`${environment.apiUrl}/api/v1/client/more/${this.profileSerice.getUserId()}`, data);
  }

  getAllByAdminId(): Observable<Client[]>{
    return this.http.get<Client[]>(`${environment.apiUrl}/api/v1/client/admin/${this.profileSerice.getUserId()}`);
  }

  getAllClient(): Observable<Client[]>{
    return this.http.get<Client[]>(`${environment.apiUrl}/api/v1/client`);
  }

  getById(clientId: string){
    return this.http.get(`${environment.apiUrl}/api/v1/client/${clientId}`);
  }


}
