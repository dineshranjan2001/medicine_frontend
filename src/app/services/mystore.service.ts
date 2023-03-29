import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MystoreService {

  constructor(private http:HttpClient) { }

  public getMyStoreDetails():Observable<any>{
    return this.http.get(`${baseUrl}/shop-dashboard/mystore`);
  }

  public getMedicineDetailsById(categoryId:number):Observable<any>{
    return this.http.get(`${baseUrl}/shop-dashboard/mystore/get-medicine/${categoryId}`);
  }
}
