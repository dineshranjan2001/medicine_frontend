import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddMedicine } from 'src/app/Modelclass/add-medicine';

@Component({
  selector: 'app-shop-mystore-showcategories',
  templateUrl: './shop-mystore-showcategories.component.html',
  styleUrls: ['./shop-mystore-showcategories.component.css']
})
export class ShopMystoreShowcategoriesComponent implements OnInit {
  constructor() { }

@Input() categoryName=''; medicineDetailsList!:AddMedicine[];
@Output() closed=new EventEmitter<any>();
searchName!:string;
pageNumber:number=1;
  ngOnInit(): void {
  }

  close(){
    this.closed.emit({
      categoryName: this.categoryName,
      medicineDetailsList:this.medicineDetailsList
    });
  }

  // searchMedicine(){
  //   if(this.searchName==""){
  //     this.medicineDetailsList;
  //   }else{
  //     this.medicineDetailsList=this.medicineDetailsList.filter(response=>{
  //       return response.medicineName.toLocaleLowerCase().match(this.searchName.toLocaleLowerCase());
  //     });
  //   }
  // }
}
