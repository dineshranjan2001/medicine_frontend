import { Component, EventEmitter, HostListener, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopDashboardComponent implements OnInit {

  fileName!:string

  constructor(private shopService:ShopService,private comService:CommunicationService) {
    this.comService.updateState.subscribe(r => {
      if (r == true) {
        this.shopService.getShopDetails().subscribe((response) => {
          this.fileName=response.fileName;
        });
      }
    });
   }

  ngOnInit(): void {

    this.shopService.getShopDetails().subscribe((response)=>{
      console.log(response.fileName);
      this.fileName=response.fileName;
    })

    this.comService.changeEmitted$.subscribe(data => {
      this.shopService.getShopDetails().subscribe((response1) => {
        this.fileName = response1.fileName;
      });
    });

  }
  

  // sideNavToggle(){
  //   this.menuStatus=!this.menuStatus;
  //   this.sideNavToggled.emit(this.menuStatus);
  // }
}
