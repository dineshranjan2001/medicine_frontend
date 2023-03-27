import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  //add customer
  public addNewCustomer(customer:any){
    return this.http.post(`${baseUrl}/sign-up/`,customer);
  }
}
