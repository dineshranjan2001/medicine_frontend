import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddMedicine } from 'src/app/Modelclass/add-medicine';
import { UpdateMedicineService } from 'src/app/services/update-medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop-update-medicines-contents',
  templateUrl: './shop-update-medicines-contents.component.html',
  styleUrls: ['./shop-update-medicines-contents.component.css']
})
export class ShopUpdateMedicinesContentsComponent implements OnInit {

  constructor(private updatemedicineService:UpdateMedicineService) { }

  private medicineId:string="ALLOPATHIC20232301";

  nameChecker: RegExp = /[A-Za-z-0-9]+/
  descChecker: RegExp = /^[a-zA-Z ]{3,60}$/;
  priceandquantityChecker:RegExp=/^[0-9]+$/;
  selectedFile!:any

  public showMedicineCategories!:AddMedicine[];
  showMedicineDetails:AddMedicine=new AddMedicine();

  ngOnInit(): void {
    this.updatemedicineService.getMedicineById(this.medicineId).subscribe(
      (data)=>{
        this.showMedicineCategories=data.categoriesDetailsList;
        this.showMedicineDetails=data.medicineDetails;
        console.log(this.showMedicineDetails);
      }
    )
  }

  onFileChanged(event:any){
    this.selectedFile=event.target.files[0];
    //console.log(this.selectedFile);
  }

  selectedDropdrowValue(){
    let value=(<HTMLInputElement>document.getElementById('selectId')).value;
   console.log(value);
   this.showMedicineDetails.categoryId=parseInt(value);
  }

  onSubmit(updateMedicineDetailsForm:NgForm){
    if (!this.nameChecker.test((<HTMLInputElement>document.getElementById('medicineName')).value)) {
      Swal.fire({      
        text: 'Please Give Valid Medicine Name...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      })
    }else if ((<HTMLInputElement>document.getElementById('selectId')).value=='0') {
      Swal.fire({      
        text: 'Please Select Medicine Category...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      })
    }else if (!this.descChecker.test((<HTMLInputElement>document.getElementById('manufactureName')).value)){
      Swal.fire({      
        text: 'Please Give Valid Manufacture Name...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      })
    }else if ((<HTMLInputElement>document.getElementById('medicinePhoto')).value==null || (<HTMLInputElement>document.getElementById('medicinePhoto')).value==""){
      Swal.fire({      
        text: 'Please Give Medicine Photo...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else if(!this.priceandquantityChecker.test((<HTMLInputElement>document.getElementById('medicinePrice')).value)){
      Swal.fire({      
        text: 'Please Give Valid Price...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      })
    }else if(!this.priceandquantityChecker.test((<HTMLInputElement>document.getElementById('medicineQuantity')).value)){
      Swal.fire({      
        text: 'Please Give Valid Quantity...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      })
    }else if(!this.descChecker.test((<HTMLInputElement>document.getElementById('medicineDesc')).value)){
      Swal.fire({      
        text: 'Please Give Valid Medicine Description...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      console.log(this.showMedicineDetails);
    }
  }

}
