import { Component, OnInit } from '@angular/core';
import { AddMedicine } from 'src/app/Modelclass/add-medicine';
import { UserWishlistService } from 'src/app/services/user-wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-wishlist-contents',
  templateUrl: './user-wishlist-contents.component.html',
  styleUrls: ['./user-wishlist-contents.component.css']
})
export class UserWishlistContentsComponent implements OnInit {

  pageNo:number=1
  getTotalNumberWishlistProducts!:number;
  wishlistProductDetailsList!:AddMedicine[];

  constructor(private wishlistService:UserWishlistService) { }

  ngOnInit(): void {
    this.wishlistService.getAllWishlistProducts().subscribe((resonse)=>{
      console.log(resonse);
      this.wishlistProductDetailsList=resonse.medicineDetailsList;
      this.getTotalNumberWishlistProducts=resonse.getTotalNumberWishlistProducts;
    })
  }


  deleteProduct(medicineId:any){
    console.log(medicineId);
    this.wishlistService.deleteWishlistProduct(medicineId).subscribe((response)=>{
      if(response.success==true){
        this.ngOnInit();
      }else if(response.success==false){
        Swal.fire({
          icon: 'error',
          title:response.message,
          confirmButtonColor: '#35a5a7',
          confirmButtonText: 'Ok'
        });
      }else{
        Swal.fire({
          icon: 'error',
          title:'Something Went Wrong!!!',
          confirmButtonColor: '#35a5a7',
          confirmButtonText: 'Ok'
        });
      }
    });
  }

}
