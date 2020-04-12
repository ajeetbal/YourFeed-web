import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { BASE_URL, APIS } from "../config/api";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUser(model: object): Observable<any> {
    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return this.http.post<any>(BASE_URL + APIS.USER_LOGIN, model, { headers: getHeaders });
  }


  constructor(private http: HttpClient) { }

}
