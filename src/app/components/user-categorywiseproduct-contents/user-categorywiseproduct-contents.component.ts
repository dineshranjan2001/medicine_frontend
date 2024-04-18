import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddMedicine } from 'src/app/Modelclass/add-medicine';
import { CommunicationService } from 'src/app/services/communication.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-user-categorywiseproduct-contents',
  templateUrl: './user-categorywiseproduct-contents.component.html',
  styleUrls: ['./user-categorywiseproduct-contents.component.css']
})
export class UserCategorywiseproductContentsComponent implements OnInit {

  pageNo:number=1;
  searchName!:string
  categoryId!:any;
  categoryName!:string;
  categoryWiseProductList!:AddMedicine[]
  constructor(
    private activatedRoute:ActivatedRoute,
    private customerService:CustomerService,
    private comService:CommunicationService) { }

  ngOnInit(): void {
    this.categoryId=this.activatedRoute.snapshot.paramMap.get('categoryId');
    this.customerService.getMedicineDetailsByCategoryId(this.categoryId).subscribe((response)=>{
      this.categoryName=response.medicineCategoryName;
      this.categoryWiseProductList=response.medicineDetailsByCategoryId;
      this.comService.sendProductDetails(this.categoryWiseProductList);
      console.log(response);
    });
  }

}
