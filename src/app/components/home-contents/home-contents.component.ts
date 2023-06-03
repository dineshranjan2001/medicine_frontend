import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-contents',
  templateUrl: './home-contents.component.html',
  styleUrls: ['./home-contents.component.css']
})
export class HomeContentsComponent implements OnInit {

  totalNosHappyCustomers:number=0;
  totalNosHappyShopOwners:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  customOptions:OwlOptions={
    loop:true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    autoplay:true,
    // autoplaySpeed:5000,
    // autoplayTimeout:5000,
    autoplayHoverPause: true,
    dots:true,
    navSpeed:100,
    // navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
    margin:30,
    responsive:{
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav:false,
  }

  aboutCustomOptions:OwlOptions={
    loop:true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    autoplay:true,
    // autoplaySpeed:5000,
    // autoplayTimeout:5000,
    autoplayHoverPause: true,
    dots:true,
    navSpeed:200,
    // navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
    margin:30,
    responsive:{
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav:false,
  }

  testimonialOptions:OwlOptions={
    loop:true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    autoplay:true,
    // autoplaySpeed:5000,
    // autoplayTimeout:5000,
    autoplayHoverPause: true,
    dots:true,
    navSpeed:200,
    // navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
    margin:30,
    responsive:{
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav:false,
  }

  totalNosHappyCustomersStop:any=setInterval(()=>{
    this.totalNosHappyCustomers++;
    if(this.totalNosHappyCustomers==200){
      clearInterval(this.totalNosHappyCustomersStop);
    }
  },50);

  totalNosHappyShopOwnersStop:any=setInterval(()=>{
    this.totalNosHappyShopOwners++;
    if(this.totalNosHappyShopOwners==95){
      clearInterval(this.totalNosHappyShopOwnersStop);
    }
  },50);


}
