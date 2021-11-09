import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Reservation} from "../moduls/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private http : HttpClient
  ) { }

  getAllByMaisonId(maisonId: string): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${environment.apiUrl}/api/v1/reservation/${maisonId}`);
  }
}
