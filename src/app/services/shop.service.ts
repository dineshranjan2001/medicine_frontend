import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }

  //upload image
  public uploadImage(uploadData:FormData){
    return this.http.post(`${baseUrl}/shop-sign-up/upload`,uploadData,{observe:'response'});
  }

  //add shop 
  public addNewShop(shop:any){
    return this.http.post(`${baseUrl}/shop-sign-up/`,shop,{responseType:'text'});
  }

  public getShopDetails():Observable<any>{
    return this.http.get(`${baseUrl}/shop-dashboard/`);
  }

  public getHomeInformation():Observable<any>{
    return this.http.get(`${baseUrl}/shop-dashboard/home`);
  }
}
