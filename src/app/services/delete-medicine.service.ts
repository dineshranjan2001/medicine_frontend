import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DeleteMedicineService {

  constructor(private http:HttpClient) { }

  public deleteMedicineDetails(medicineId:string):Observable<any>{
    return this.http.delete(`${baseUrl}/shop-dashboard/delete-medicine/${medicineId}`);
  }
}
