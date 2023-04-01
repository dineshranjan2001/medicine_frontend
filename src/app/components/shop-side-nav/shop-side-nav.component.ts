import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/Modelclass/shop';
import { CommunicationService } from 'src/app/services/communication.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-side-nav',
  templateUrl: './shop-side-nav.component.html',
  styleUrls: ['./shop-side-nav.component.css']
})
export class ShopSideNavComponent implements OnInit {

  shop: Shop = new Shop();

  constructor(private shopService: ShopService, private comService: CommunicationService,) {
    this.comService.updateState.subscribe(r => {
      if (r == true) {
        this.shopService.getShopDetails().subscribe((response2) => {
          this.shop = response2;
        });
      }
    });

  }
  ngOnInit(): void {
    this.shopService.getShopDetails().subscribe((response) => {
      this.shop = response;
    });

    this.comService.changeEmitted$.subscribe(data => {
      this.shopService.getShopDetails().subscribe((response1) => {
        this.shop = response1;
      });
    });

  }


}
