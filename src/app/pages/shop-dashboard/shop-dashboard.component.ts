import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopDashboardComponent implements OnInit {

  status:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  addToggle(){
    this.status=!this.status;
  }
}
