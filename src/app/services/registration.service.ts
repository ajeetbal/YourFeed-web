import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BASE_URL,APIS } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registerUser(model: object): Observable<any> {
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(BASE_URL + APIS.USER_SAVE, model, { headers: getHeaders });
  }

  checkUserNameAvailability(username): Observable<any> {
    return this.http.get<any>(BASE_URL + APIS.CHECK_USERNAME_AVAILABILITY + username
    );
  }
  constructor(private http:HttpClient) { }
}
