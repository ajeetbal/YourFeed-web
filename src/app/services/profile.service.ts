import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { BASE_URL, APIS, token } from "../config/api";
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

  uploadProfileImage(filePath): Observable<any> {        
    const formData = new FormData();
    formData.append('file', filePath, filePath.name)    
    console.log(formData);
    const getHeaders: HttpHeaders = new HttpHeaders({      
      "Authorization": token,
      'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });
    return this.http.post<any>(BASE_URL + APIS.USER_PROFILE_UPLOAD, formData, { headers: getHeaders });
  }

  getUploadImage(): Observable<any>{
    const getHeaders: HttpHeaders = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',     
      "Authorization": token,
      'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });
     return this.http.get<any>(BASE_URL + APIS.USER_UPLOAD_IMAGE_DOWNLOAD, {headers: getHeaders});
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
