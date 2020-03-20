import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { BASE_URL, APIS } from "../config/api";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUser(username: any, password: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      observe: 'response' as 'response'
    };
    const body = new HttpParams().set('username', username).set('password', password);
    return this.http.post<any>(BASE_URL + APIS.USER_LOGIN, body, httpOptions).pipe(
      map((e: HttpResponse<any>) => e));
  }
  

  constructor(private http: HttpClient) { }

}
