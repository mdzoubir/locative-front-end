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

  constructor(
    private http: HttpClient,
    private profileService: ProfileService
  ) { }

  getAllMaisonByAdminId():Observable<Maison[]>{
    return this.http.get<Maison[]>(`${environment.apiUrl}/api/v1/maison/admin/${this.profileService.getUserId()}`);
  }

  getMaisonByClientId():Observable<Maison[]>{
    return this.http.get<Maison[]>(`${environment.apiUrl}/api/v1/maison/client/${this.profileService.getUserId()}`);
  }

  getByMaisonId(id: string): Observable<Maison>{
    return this.http.get<Maison>(`${environment.apiUrl}/api/v1/maison/${id}`);
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
           assetId: string){
    return this.http.post(`${environment.apiUrl}/api/v1/maison/${clientId}/${adminId}/${assetId}`, date);
  }
}
