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

  apiUrl: string = "http://localhost:8080";

  constructor(
    private http : HttpClient,
    private profileSerice: ProfileService) { }

  getClient(): Observable<Client>{
    return this.http.get<Client>(`${this.apiUrl}/api/v1/client/${this.profileSerice.getUserId()}`);
  }

  updateBasic(data:{firstName: string, lastName: string}): Observable<Client>{
    return this.http.post<Client>(`${this.apiUrl}/api/v1/client/${this.profileSerice.getUserId()}`, data);
  }

  updateMoreInfo(data:{cin: string, compteNumber: string, paymentMethode: string}, id:string): Observable<Client>{
    return this.http.post<Client>(`${this.apiUrl}/api/v1/client/more/${id}`, data);
  }

  getAllByAdminId(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}/api/v1/client/admin/${this.profileSerice.getUserId()}`);
  }

  getAllClient(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}/api/v1/client`);
  }

  getById(clientId: string): Observable<Client>{
    return this.http.get<Client>(`${this.apiUrl}/api/v1/client/${clientId}`);
  }

  getClientPage(): Observable<Client[]>{
     return this.http.get<Client[]>(`${this.apiUrl}/api/v1/client/all/${this.profileSerice.getUserId()}`, )
  }

}
