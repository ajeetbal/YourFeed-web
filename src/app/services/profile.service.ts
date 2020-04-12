import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { BASE_URL, APIS } from "../config/api";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  token = localStorage.getItem('token');
  getProfile(): Observable<any> {
    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": this.token
      ,
      'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });
    return this.http.get<any>(BASE_URL + APIS.USER_PROFILE, { headers: getHeaders });
  }

  updateProfile(model: object): Observable<any> {
    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": this.token
      ,
      'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });
    return this.http.put<any>(BASE_URL + APIS.USER_PROFILE, model, { headers: getHeaders });
  }


  constructor(private http: HttpClient) { }
}
