import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http:HttpClient) { }

  public saveForgotPassword(userNameOrEmail:any,password:any):Observable<any>{
    return this.http.patch(`${baseUrl}/${userNameOrEmail}/${password}`,userNameOrEmail,password);
  }
}
