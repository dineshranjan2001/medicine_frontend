import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UpdateMedicineService {

  constructor(private http:HttpClient) { }

  public getMedicineById(medicineId:string):Observable<any>{
    return this.http.get(`${baseUrl}/shop-dashboard/update-medicine/${medicineId}`);
  }

  public saveUpdatedMedicineDetails(AddMedicine:any):Observable<any>{
    return this.http.put(`${baseUrl}/shop-dashboard/update-medicine/`,AddMedicine);
  }
}
