import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private http:HttpClient) { }

  //to show all orders of a customer
  public getAllOrderHistory():Observable<any>{
    return this.http.get(`${baseUrl}/user-dashboard/my-orders`);
  }
}
