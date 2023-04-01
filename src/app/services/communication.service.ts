import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Subscriber } from 'rxjs/internal/Subscriber';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

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

}
