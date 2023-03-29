import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddMedicine } from 'src/app/Modelclass/add-medicine';
import { AddMedicineService } from 'src/app/services/add-medicine.service';
import { UpdateMedicineService } from 'src/app/services/update-medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop-update-medicines-contents',
  templateUrl: './shop-update-medicines-contents.component.html',
  styleUrls: ['./shop-update-medicines-contents.component.css']
})
export class ShopUpdateMedicinesContentsComponent implements OnInit {

 

  constructor(private updatemedicineService:UpdateMedicineService,
    private addMedicineService:AddMedicineService, 
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  //private medicineId:string="ALLOPATHIC20232301";
  medicineId:any;
  nameChecker: RegExp = /[A-Za-z-0-9]+/
  descChecker: RegExp = /^[a-zA-Z., ]{3,60}$/;
  priceandquantityChecker:RegExp=/^[0-9]+$/;
  selectedFile!:any

  public showMedicineCategories!:AddMedicine[];
  medicineDetails:AddMedicine=new AddMedicine();

  ngOnInit(): void {
    this.medicineId=this.activatedRoute.snapshot.paramMap.get('medicineId');
    this.updatemedicineService.getMedicineById(this.medicineId).subscribe(
      (data)=>{
        this.showMedicineCategories=data.categoriesDetailsList;
        this.medicineDetails=data.medicineDetails;
        console.log(this.medicineDetails);
      }
    )
  }


  onFileChanged(event:any){
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile);
  }

  selectedDropdrowValue(){
    let value=(<HTMLInputElement>document.getElementById('selectId')).value;
   console.log(value);
   this.medicineDetails.categoryId=parseInt(value);
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
    } else if(!this.priceandquantityChecker.test((<HTMLInputElement>document.getElementById('medicinePrice')).value)){
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
      console.log(this.medicineDetails);
      if ((<HTMLInputElement>document.getElementById('medicinePhoto')).value){
        const uploadData = new FormData();
        uploadData.append('imageFile',this.selectedFile,this.selectedFile.name);
        this.addMedicineService.uploadImage(uploadData).subscribe((response)=>{
          console.log(response);
        });
      }
      this.updatemedicineService.saveUpdatedMedicineDetails(this.medicineDetails).subscribe((response)=>{
        console.log(response.success==true);
        if(response.success==true){
          Swal.fire({
            icon: 'success',
            title: response.message,
            confirmButtonColor: '#35a5a7',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/shop-dashboard/mystore']);
            }
          });
        }else if(response.success==false){
          Swal.fire({
            icon: 'error',
            title: response.message,
            confirmButtonColor: '#35a5a7',
            confirmButtonText: 'Ok'
          });
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong!!!',
            confirmButtonColor: '#35a5a7',
            confirmButtonText: 'Ok'
          });
        }
      });
    }
  }

}
