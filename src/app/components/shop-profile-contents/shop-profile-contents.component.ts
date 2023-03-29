import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/Modelclass/shop';
import { ShopProfileService } from 'src/app/services/shop-profile.service';

@Component({
  selector: 'app-shop-profile-contents',
  templateUrl: './shop-profile-contents.component.html',
  styleUrls: ['./shop-profile-contents.component.css']
})
export class ShopProfileContentsComponent implements OnInit {

  public shopProfile:Shop=new Shop();
  constructor(private shopProfileService:ShopProfileService) { }

  ngOnInit(): void {
    this.shopProfileService.getProfile().subscribe((response)=>{
      this.shopProfile=response;
    });
  }

}
