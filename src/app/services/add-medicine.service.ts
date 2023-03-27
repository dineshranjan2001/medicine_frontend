import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AddMedicine } from '../Modelclass/add-medicine';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AddMedicineService {

  constructor(private http:HttpClient) { }

  public uploadImage(uploadData:FormData){
    return this.http.post(`${baseUrl}/shop-dashboard/upload`,uploadData,{observe:'response'});
  }

  public medicineCategoriesDetails():Observable<AddMedicine[]>{
    return this.http.get<AddMedicine[]>(`${baseUrl}/shop-dashboard/add-medicine`);
  }

  public saveMedicineDetails(addMedicine:any){
    return this.http.post(`${baseUrl}/shop-dashboard/add-medicine/save`,addMedicine,{observe:'response'});
  }
}
