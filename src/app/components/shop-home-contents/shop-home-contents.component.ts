import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shop-home-contents',
  templateUrl: './shop-home-contents.component.html',
  styleUrls: ['./shop-home-contents.component.css']
})
export class ShopHomeContentsComponent implements OnInit {

  customOptions:OwlOptions={
    loop:true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    autoplay:true,
    // autoplaySpeed:5000,
    // autoplayTimeout:5000,
    autoplayHoverPause: true,
    dots:false,
    navSpeed:100,
    navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
    margin:30,
    responsive:{
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav:true,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
