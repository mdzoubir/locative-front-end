import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../moduls/reservation";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  apiUrl: string = "http://localhost:8080";

  constructor(
    private http : HttpClient
  ) { }

  getAllByMaisonId(maisonId: string): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${this.apiUrl}/api/v1/reservation/${maisonId}`);
  }

  getReservationById(id: string): Observable<Reservation>{
    return this.http.get<Reservation>(`${this.apiUrl}/api/v1/reservation/${id}`);
  }

  addReservation(data:{startAtt: Date, endAtt: Date, totalRent: number}, id:string){
    return this.http.post(`${this.apiUrl}/api/v1/reservation/${id}`, data);
  }
  getAllByAdminId(adminId: string): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${this.apiUrl}/api/v1/reservation/all/${adminId}`);
  }

  getAllReservation(){
    return this.http.get<Reservation[]>(`${this.apiUrl}/api/v1/reservation`);
  }
}
