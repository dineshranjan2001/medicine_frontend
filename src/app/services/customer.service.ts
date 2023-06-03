import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  //add customer
  public addNewCustomer(customer:any):Observable<any>{
    return this.http.post(`${baseUrl}/sign-up/`,customer);
  }

  //get all information for user home-dashboard
  public getAllHomeInformation():Observable<any>{
    return this.http.get(`${baseUrl}/user-dashboard/home`);
  }

  //get all medicine details by medicine category id
  public getMedicineDetailsByCategoryId(categoryId:any):Observable<any>{
    return this.http.get(`${baseUrl}/user-dashboard/product-category/${categoryId}`);
  }

  //get medicine details by medicine id
  public getMedicineDetailbyMedicineId(medicineId:any):Observable<any>{
    return this.http.get(`${baseUrl}/user-dashboard/product-details/${medicineId}`);
  }

  //get information for side-navbar and navbar 
  public getNavbarInformation():Observable<any>{
    return this.http.get(`${baseUrl}/user-dashboard/`);
  }
}
