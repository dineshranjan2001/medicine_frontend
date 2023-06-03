import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMedicine } from 'src/app/Modelclass/add-medicine';
import { UserAddToCartService } from 'src/app/services/user-add-to-cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-mycart-contents',
  templateUrl: './user-mycart-contents.component.html',
  styleUrls: ['./user-mycart-contents.component.css']
})
export class UserMycartContentsComponent implements OnInit {

  grandTotalPrice!:number;
  totalProductNos!:number;
  productDetailsList!:AddMedicine[];
  orderPlaceDetails={};

  constructor(private addMyCartsService:UserAddToCartService,private router:Router) { }

  ngOnInit(): void {
    this.addMyCartsService.getAllMyCartsProducts().subscribe((response)=>{
      console.log(response);
      this.productDetailsList=response.medicineDetailsList;
      this.grandTotalPrice=response.grandTotalPrice;
      this.totalProductNos=response.totalProductNos;
    });
  }

  getIncrease(medicineId:any,medicinePrice:any) {
    this.productDetailsList.filter((productDetails)=>{
      if(medicineId===productDetails.medicineId){
        productDetails.orderQuantity+=1;
        this.addMyCartsService.updateMyCartsProducts(medicineId,medicinePrice,productDetails.orderQuantity).subscribe((response)=>{
          if(response.success==true){
            this.ngOnInit();
          }
        });
      }
    });   
  }
  getDecrease(medicineId:any,medicinePrice:any) {
    this.productDetailsList.filter((productDetails)=>{
      if(medicineId===productDetails.medicineId){
        if(productDetails.orderQuantity==1){
          productDetails.orderQuantity=1;
        }else{
          productDetails.orderQuantity-=1;
          this.addMyCartsService.updateMyCartsProducts(medicineId,medicinePrice,productDetails.orderQuantity).subscribe((response)=>{
            if(response.success==true){
              this.ngOnInit();
            }
          });
        }
      }
    });
  }

  deleteItems(medicineId:any){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.addMyCartsService.deleteMyCartsProducts(medicineId).subscribe((response)=>{
          if(response.success==true){
            this.ngOnInit();
          }
        })
      }
    })
    
  }

  placeOrder(){
    this.orderPlaceDetails=this.productDetailsList.map(productDetails=>{
      return {
        "medicineId":productDetails.medicineId,
        "totalPrice":productDetails.totalPrice,
        "shopId":productDetails.shopId,
        "orderQuantity":productDetails.orderQuantity
      }
    });
    console.log(this.orderPlaceDetails);
    this.addMyCartsService.orderPlace(this.orderPlaceDetails).subscribe((response)=>{
      console.log(response);
      Swal.fire({
        text: response,
        confirmButtonColor: '#35a5a7',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/user-dashboard/home']);
        }
      });
    });
  }
}
