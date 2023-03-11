import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ShopMystoreShowcategoriesComponent } from '../shop-mystore-showcategories/shop-mystore-showcategories.component';

@Component({
  selector: 'app-shop-mystore-contents',
  templateUrl: './shop-mystore-contents.component.html',
  styleUrls: ['./shop-mystore-contents.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopMystoreContentsComponent implements OnInit {
  pageno:number=1;
  @ViewChild('showCategories',{read:ViewContainerRef,static:true})showCategories!:ViewContainerRef;
  constructor() { }

  ngOnInit(): void {
  }
  showComponent(){
    this.showCategories.clear();
    this.showCategories.createComponent(ShopMystoreShowcategoriesComponent);
  }

}
