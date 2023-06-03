import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserAddToCartService {

  constructor(private http: HttpClient) { }

  //add to cart
  public addToCart(medicineId: any, medicinePrice:any,orderQuantity: any) {
    return this.http.post(`${baseUrl}/user-dashboard/product-details/send-to-cart?medicineId=${medicineId}&medicinePrice=${medicinePrice}&orderQuantity=${orderQuantity}`, {}, { responseType: 'text' });
  }

  //get All product details of my-carts
  public getAllMyCartsProducts():Observable<any>{
    return this.http.get(`${baseUrl}/user-dashboard/my-carts`);
  }

  //update product details of my-carts
  public updateMyCartsProducts(medicineId: any, medicinePrice:any,orderQuantity: any):Observable<any>{
    return this.http.put(`${baseUrl}/user-dashboard/my-carts/update?medicineId=${medicineId}&medicinePrice=${medicinePrice}&orderQuantity=${orderQuantity}`,{});
  }

  //delete product from mycarts
  public deleteMyCartsProducts(medicineId:any):Observable<any>{
    return this.http.delete(`${baseUrl}/user-dashboard/my-carts/delete/${medicineId}`);
  }

  //order place 
  public orderPlace(orderPlaceDetails:{}){
    return this.http.post(`${baseUrl}/user-dashboard/my-carts/order-place/`,orderPlaceDetails,{responseType:'text'});
  }
}
