import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { AddMedicine } from 'src/app/Modelclass/add-medicine';
import { DeleteMedicineService } from 'src/app/services/delete-medicine.service';
import { MystoreService } from 'src/app/services/mystore.service';
import Swal from 'sweetalert2';
import { ShopMystoreShowcategoriesComponent } from '../shop-mystore-showcategories/shop-mystore-showcategories.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-shop-mystore-contents',
  templateUrl: './shop-mystore-contents.component.html',
  styleUrls: ['./shop-mystore-contents.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopMystoreContentsComponent implements OnInit {
[x: string]: any;
  categoryId:number=0;
  pageNo:number=1;
  @ViewChild('showCategories',{read:ViewContainerRef,static:true})showCategories!:ViewContainerRef;
  public getCategoriesList!:AddMedicine[];
  public getMedicineDetailsList!:AddMedicine[];
  medicineName!:string

  constructor(private myStoreService:MystoreService,private deleteMedicineService:DeleteMedicineService) { }

  ngOnInit(): void {
    this.myStoreService.getMyStoreDetails().subscribe((data)=>{
      console.log(data);
      this.getCategoriesList=data.getCategoriesList;
      this.getMedicineDetailsList=data.getMedicineDetailsList;
    })

  }
  showComponent(categoryId:number,categoryName:string){
    this.showCategories.clear();
    const component=this.showCategories.createComponent(ShopMystoreShowcategoriesComponent);
    component.instance.categoryName=categoryName;
    this.myStoreService.getMedicineDetailsById(categoryId).subscribe((data)=>{
      console.log(data);
      component.instance.medicineDetailsList=data;
    });
    console.log(categoryId+" "+categoryName);

    component.instance.closed.subscribe((response:any)=>{
      console.log(response);
      component.destroy();
    })
  }

  searchMedicine(){
    if(this.medicineName==""){
      this.ngOnInit();
    }else{
      this.getMedicineDetailsList=this.getMedicineDetailsList.filter(response=>{
        return response.medicineName.toLocaleLowerCase().match(this.medicineName.toLocaleLowerCase());
      });
    }
  }

  // key:string='slno';
  // reverse:boolean=false;
  // sort(key:string){
  //   console.log("edsfdfv");
  //   this.key=key;
  //   this.reverse=!this.reverse;
  // }

  confirmBox(medicineId:string){
    var checkSuccess:Boolean;
    var message:String
    Swal.fire({
      title: 'Are you sure?',
      color:'#d44e2e',
      text:medicineId,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteMedicineService.deleteMedicineDetails(medicineId).subscribe((response)=>{
          console.log(response);
          checkSuccess=response.success;
          message=response.message;
          this.ngOnInit();
        });
      }
    })
  }
}
