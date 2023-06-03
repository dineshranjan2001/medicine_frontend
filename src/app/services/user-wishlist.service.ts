import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserWishlistService {

  constructor(private http:HttpClient) { }

  //add product to wishlist.........
  public addProductToWishList(medicineId:any){
    return this.http.post(`${baseUrl}/user-dashboard/send-wishlist?medicineId=${medicineId}`,{},{'responseType':'text'});
  }

  //get all wishlist products
  public getAllWishlistProducts():Observable<any>{
    return this.http.get(`${baseUrl}/user-dashboard/my-wishlist`);
  }

  //delete product from wishlist
  public deleteWishlistProduct(medicineId:any):Observable<any>{
    return this.http.delete(`${baseUrl}/user-dashboard/my-wishlist/delete/${medicineId}`);
  }
}
