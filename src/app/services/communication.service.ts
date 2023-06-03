import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { AddMedicine } from '../Modelclass/add-medicine';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

//for get reflect in one component after got any changes in another components

  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange() {
    this.emitChangeSource.next(1);
  }

  updated!: Subscriber<boolean>;
  updateState: Observable<boolean> = new Observable((observer) => {
    this.updated = observer;
    this.updated.next(true);
  });


  //for send the data one component to another component

  private productDetails=new BehaviorSubject<any>([]);
  public getProductDetails=this.productDetails.asObservable();

  sendProductDetails(data:AddMedicine[]){
    this.productDetails.next(data);
  }

}
