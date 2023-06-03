import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http:HttpClient) { }

  //upload image
  public uploadImage(uploadData:FormData){
    return this.http.post(`${baseUrl}/user-dashboard/upload`,uploadData,{responseType:'text'});
  }

  //get user profile details 
  public getUserProfileDetails():Observable<any>{
    return this.http.get(`${baseUrl}/user-dashboard/my-profile`);
  }

  //update the customer Details
  public setUpdatedCustomerDetails(customerDetails:any):Observable<any>{
    return this.http.put(`${baseUrl}/user-dashboard/my-profile/`,customerDetails);
  }
}
