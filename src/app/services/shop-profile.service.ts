import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Shop } from '../Modelclass/shop';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ShopProfileService {

  constructor(private http:HttpClient) { }

  public getProfile():Observable<any>{
    return this.http.get(`${baseUrl}/shop-dashboard/profile`);
  }
}
