import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Asset} from "../moduls/asset";

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(
    private http : HttpClient
  ) { }

  getAllAssets(): Observable<Asset[]>{
    return this.http.get<Asset[]>(`${environment.apiUrl}/api/v1/asset`);
  }

  getByType(type: string): Observable<Asset>{
    return this.http.get<Asset>(`${environment.apiUrl}/api/v1/asset/${type}`);
  }
}
