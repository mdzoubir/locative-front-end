import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Message} from '../moduls/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiUrl: string = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  getAllMassage(): Observable<Message[]>{
    return this.http.get<Message[]>(`${this.apiUrl}/api/v1/contact`);
  }
}
