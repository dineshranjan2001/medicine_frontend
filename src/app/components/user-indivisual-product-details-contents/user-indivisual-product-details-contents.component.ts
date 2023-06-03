import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddMedicine } from 'src/app/Modelclass/add-medicine';
import { CustomerService } from 'src/app/services/customer.service';
import { UserAddToCartService } from 'src/app/services/user-add-to-cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-indivisual-product-details-contents',
  templateUrl: './user-indivisual-product-details-contents.component.html',
  styleUrls: ['./user-indivisual-product-details-contents.component.css']
})
export class UserIndivisualProductDetailsContentsComponent implements OnInit {

  orderQuantity: number = 1;
  medicineId!: any
  productDetails: AddMedicine = new AddMedicine();

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private myCartsService: UserAddToCartService
  ) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.medicineId = this.activatedRoute.snapshot.paramMap.get('medicineId');
    this.customerService.getMedicineDetailbyMedicineId(this.medicineId).subscribe((response) => {
      this.productDetails = response;
      console.log(response);
    });
    //for accepting other component to this components
    // this.comService.getProductDetails.subscribe((response)=>{
    //   console.log("in indivisual ts file : "+response);
    //   this.productDetailsList=response;
    //   this.productDetails=this.productDetailsList.filter((details)=>
    //       details.medicineId==this.medicineId)[0];
    //   console.log(this.productDetails);
    // })
  }

  getIncrease() {
    this.orderQuantity += 1;
  }
  getDecrease() {
    if (this.orderQuantity == 1) {
      this.orderQuantity = 1;
    } else {
      this.orderQuantity -= 1;
    }
  }

  addToCart(medicineId: any, medicinePrice: any) {
    console.log(medicineId + "\t" + medicinePrice + "\t" + this.orderQuantity);
    this.myCartsService.addToCart(medicineId, medicinePrice, this.orderQuantity).subscribe((response) => {
      Swal.fire({
        text: response,
        confirmButtonColor: '#0b7fd5',
        confirmButtonText: 'Ok'
      });
    });
  }

}
