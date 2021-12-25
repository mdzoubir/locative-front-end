import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProfileService} from "./profile.service";
import {Observable} from "rxjs";
import {Maison} from "../moduls/maison";

@Injectable({
  providedIn: 'root'
})
export class MaisonService {

  apiUrl: string = "http://localhost:8080";

  constructor(
    private http: HttpClient,
    private profileService: ProfileService
  ) { }

  getAllMaisonByAdminId():Observable<Maison[]>{
    return this.http.get<Maison[]>(`${this.apiUrl}/api/v1/maison/admin/${this.profileService.getUserId()}`);
  }

  getMaisonByClientId():Observable<Maison[]>{
    return this.http.get<Maison[]>(`${this.apiUrl}/api/v1/maison/client/${this.profileService.getUserId()}`);
  }

  getAllByClintId(clientId: string):Observable<Maison[]>{
    return this.http.get<Maison[]>(`${this.apiUrl}/api/v1/maison/client/${clientId}`)
  }

  getByMaisonId(id: string): Observable<Maison>{
    return this.http.get<Maison>(`${this.apiUrl}/api/v1/maison/${id}`);
  }

  getLastMaison(id: string){
    return this.http.get(`${this.apiUrl}/api/v1/maison/admin/last/${id}`)
  }

  getAll(): Observable<Maison[]>{
    return this.http.get<Maison[]>(`${this.apiUrl}/api/v1/maison`);
  }

  addHouse(date:{
            location: string,
             city: string,
             zipCode: string,
             area: number,
             chamberNumber: number,
             toiletNumber: number,
             bathroomNumber: number,
             floorsNumber: number,
             elevator: boolean,
             rentPrice: number,
             latitude: number,
             longitude: number
           },
           clientId: string,
           adminId: string,
           assetId: number){
    return this.http.post(`${this.apiUrl}/api/v1/maison/${clientId}/${adminId}/${assetId}`, date);
  }
}
