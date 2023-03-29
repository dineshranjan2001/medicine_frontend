import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddMedicine } from 'src/app/Modelclass/add-medicine';
import { AddMedicineService } from 'src/app/services/add-medicine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop-add-medicines-contents',
  templateUrl: './shop-add-medicines-contents.component.html',
  styleUrls: ['./shop-add-medicines-contents.component.css']
})
export class ShopAddMedicinesContentsComponent implements OnInit {



  nameChecker: RegExp = /[A-Za-z-0-9]+/
  descChecker: RegExp = /^[a-zA-Z., ]{3,600}$/;
  priceandquantityChecker: RegExp = /^[0-9]+$/;

  public showMedicineCategories!: AddMedicine[];
  addMedicine: AddMedicine = new AddMedicine();


  constructor(
    private addMedicineService: AddMedicineService,
    private router: Router) { }


  selectedFile!: any

  ngOnInit(): void {
    this.addMedicineService.medicineCategoriesDetails().subscribe((response) => {
      this.showMedicineCategories = response;
    });
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  selectedDropdrowValue() {
    let value = (<HTMLInputElement>document.getElementById('selectId')).value;
    console.log(value);
    this.addMedicine.categoryId = parseInt(value);
  }

  onSubmit(medicineDetailsForm: NgForm) {
    if (!this.nameChecker.test((<HTMLInputElement>document.getElementById('medicineName')).value)) {
      Swal.fire({
        text: 'Please Give Valid Medicine Name...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.descChecker.test((<HTMLInputElement>document.getElementById('manufactureName')).value)) {
      Swal.fire({
        text: 'Please Give Valid Manufacture Name...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if ((<HTMLInputElement>document.getElementById('medicinePhoto')).value == null || (<HTMLInputElement>document.getElementById('medicinePhoto')).value == "") {
      Swal.fire({
        text: 'Please Give Medicine Photo...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else if (!this.priceandquantityChecker.test((<HTMLInputElement>document.getElementById('medicinePrice')).value)) {
      Swal.fire({
        text: 'Please Give Valid Price...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.priceandquantityChecker.test((<HTMLInputElement>document.getElementById('medicineQuantity')).value)) {
      Swal.fire({
        text: 'Please Give Valid Quantity...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.descChecker.test((<HTMLInputElement>document.getElementById('medicineDesc')).value)) {
      Swal.fire({
        text: 'Please Give Valid Medicine Description...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      console.log(this.addMedicine);
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.addMedicineService.uploadImage(uploadData).subscribe((response) => {
        if (response.status == 200) {
          this.addMedicineService.saveMedicineDetails(this.addMedicine).subscribe(
            (response1) => {
              if (response1.success == true) {
                Swal.fire({
                  icon: 'success',
                  title: response1.message,
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                }).then((result) => {
                  if (result.isConfirmed) {
                    medicineDetailsForm.reset();
                    (<HTMLSelectElement>document.getElementById('selectId')).options.length = 0;
                    (<HTMLInputElement>document.getElementById('medicinePhoto')).value = "";
                    this.router.navigate(['/shop-dashboard/mystore']);
                  }
                });
              } else if (response1.success == false) {
                Swal.fire({
                  icon: 'error',
                  title: response1.message,
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                }).then((result) => {
                  if (result.isConfirmed) {
                    medicineDetailsForm.reset();
                    (<HTMLSelectElement>document.getElementById('selectId')).options.length = 0;
                    (<HTMLInputElement>document.getElementById('medicinePhoto')).value = "";
                  }
                });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Some thing went wrong...',
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                }).then((result) => {
                  if (result.isConfirmed) {
                    medicineDetailsForm.reset();
                    (<HTMLSelectElement>document.getElementById('selectId')).options.length = 0;
                    (<HTMLInputElement>document.getElementById('medicinePhoto')).value = "";
                  }
                });
              }
            }
          )
        }
      });

    }
  }
}
