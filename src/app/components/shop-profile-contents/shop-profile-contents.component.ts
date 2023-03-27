import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/Modelclass/shop';
import { ShopProfileService } from 'src/app/services/shop-profile.service';

@Component({
  selector: 'app-shop-profile-contents',
  templateUrl: './shop-profile-contents.component.html',
  styleUrls: ['./shop-profile-contents.component.css']
})
export class ShopProfileContentsComponent implements OnInit {

  public profiles!: Shop[];
  constructor(private shopProfile:ShopProfileService) { }

  ngOnInit(): void {
    this.shopProfile.getProfile().subscribe((response)=>{
      this.profiles=response;
    });
  }

}
