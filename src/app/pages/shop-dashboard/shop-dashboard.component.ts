import { Component, EventEmitter, HostListener, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopDashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  // sideNavToggle(){
  //   this.menuStatus=!this.menuStatus;
  //   this.sideNavToggled.emit(this.menuStatus);
  // }
}
