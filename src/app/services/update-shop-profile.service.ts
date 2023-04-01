import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UpdateShopProfileService {

  constructor(private http:HttpClient) { }

  public uploadImage(uploadData:FormData){
    return this.http.post(`${baseUrl}/shop-dashboard/update-profile/upload`,uploadData,{responseType:'text'});
  }

  public getProfileDetails():Observable<any>{
    return this.http.get(`${baseUrl}/shop-dashboard/update-profile`);
  }

  public saveUpdatedProfileDetails(shop:any):Observable<any>{
    return this.http.put(`${baseUrl}/shop-dashboard/update-profile/`,shop);
  }
}
