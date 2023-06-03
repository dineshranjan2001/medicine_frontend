import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoginService {

  constructor(private http:HttpClient) { }

  //current customer which is LoggedIn
  public getCurrentCustomerRole(){
    return this.http.get(`${baseUrl}/mediorder/customer-role`,{responseType:'text'});
  }


  //generate token
  public generateToken(customerDetails:any):Observable<any>{
    return this.http.post(`${baseUrl}/mediorder/sign-in/generate-token`,customerDetails);
  }

  //login customer :set token in localStorage
  public loginCustomer(token:any){
    localStorage.setItem('token',token);
    return true;
  }

  //isLogin: customer is logged in or not 
  public isLoggedIn(){
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  //logout : remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('customerRole');
    return true;
  }
   
  //get token
  public getToken(){
    return localStorage.getItem('token');
  }

  //set CustomerDetails
  // public setCustomerDetails(customer:any){
  //   localStorage.setItem('customerDetails',JSON.stringify(customer));
  // }

  //get customerRole
  public getCustomerRole(){
    let role=localStorage.getItem('customerRole');
    if(role!=null){
     return role;
    }else{
      this.logout();
      return null;
    }
  }

  //set customer role
  public setCustomerRole(customerRole:any){
    localStorage.setItem('customerRole',customerRole);
  }
}
