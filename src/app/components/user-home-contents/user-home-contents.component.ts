import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AddMedicine } from 'src/app/Modelclass/add-medicine';
import { CustomerService } from 'src/app/services/customer.service';
import { UserWishlistService } from 'src/app/services/user-wishlist.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-home-contents',
  templateUrl: './user-home-contents.component.html',
  styleUrls: ['./user-home-contents.component.css']
})
export class UserHomeContentsComponent implements OnInit {

  pageNo:number=1;
  searchName!:string;
  public getMedicineCategoryDetailsList!:AddMedicine[];
  public getBestSellerMedicineList!:AddMedicine[];
  public getAllMedicineList!:AddMedicine[];

  constructor(private customerService:CustomerService,private wishListService:UserWishlistService) { }

  ngOnInit(): void {
    this.customerService.getAllHomeInformation().subscribe((response)=>{
      this.getMedicineCategoryDetailsList=response.getMedicineCategoryDetailsList;
      this.getBestSellerMedicineList=response.getBestSellerMedicineList;
      this.getAllMedicineList=response.getAllMedicineList;
      console.log(response);
    });
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
  
  //add products to WishList
  addToWishlist(medicineId:any){
      console.log(medicineId);
      this.wishListService.addProductToWishList(medicineId).subscribe((response)=>{
        console.log(response);
        Swal.fire({
              text:response,
              confirmButtonColor: '#0b7fd5',
              confirmButtonText: 'Ok'
            });
      });
  }

}
