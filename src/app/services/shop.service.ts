import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
