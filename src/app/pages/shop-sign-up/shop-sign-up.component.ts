import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shop } from 'src/app/Modelclass/shop';
import { ShopService } from 'src/app/services/shop.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-shop-sign-up',
  templateUrl: './shop-sign-up.component.html',
  styleUrls: ['./shop-sign-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopSignUpComponent implements OnInit {

  @ViewChild("shopAddress")
  shopAddress!: ElementRef;
  showOwnerSection: boolean = true;
  showShopSection: boolean = false;
  showRegisterBtn: boolean = false;
  showNextBtnSection: boolean = true;
  showImageIcon: boolean = true;
  showimagePreviewSection: boolean = false;
  checkStatusNumber: Number = 0;
  preview: string = "";
  private selectedFile: any;

  nameChecker: RegExp = /^[a-zA-Z ]{3,20}$/;
  emailChecker: RegExp = /^[a-zA-Z0-9._\-]+[@][a-zA-Z.]+[a-z]{2,3}$/;
  phoneChecker: RegExp = /^[6789][0-9]{9}$/;
  addressChecker: RegExp = /^[A-Za-z0-9'\.\-\s\,]+$/;
  passwordChecker: RegExp = /^[A-Za-z0-9]{8}$/;
  shopNameChecker: RegExp = /^[a-zA-Z ]{3,30}$/;
  shopEmailCheck: RegExp = /^[A-Za-z.-]+[@][a-z]+[.][a-z]{2,3}$/;
  constructor(private shopService: ShopService) { }

  shop: Shop = new Shop();

  onclick(): void {
    if (this.nameChecker.test(this.shop.ownerFirstName) && this.nameChecker.test(this.shop.ownerLastName) && this.phoneChecker.test(this.shop.ownerPhone)) {
      this.showOwnerSection = !this.showOwnerSection;
      this.showShopSection = !this.showShopSection;
      this.showNextBtnSection = !this.showNextBtnSection;
      this.showRegisterBtn = !this.showRegisterBtn;
      (<HTMLInputElement>document.getElementById('body')).style.height = '125vh';
      (<HTMLInputElement>document.getElementById('image-section')).style.paddingTop = '19%';
    } else if (!this.nameChecker.test((<HTMLInputElement>document.getElementById('ownerFirstName')).value)) {
      Swal.fire({      
        text: 'Please Give Valid Name...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.nameChecker.test((<HTMLInputElement>document.getElementById('ownerLastName')).value)) {
      Swal.fire({
        text: 'Please Give Valid Name...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (!this.phoneChecker.test((<HTMLInputElement>document.getElementById('ownerPhone')).value)) {
      Swal.fire({
        text: 'Please Give Valid Phone Number...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  backTo(): void {
    this.showOwnerSection = !this.showOwnerSection;
    this.showShopSection = !this.showShopSection;
    this.showNextBtnSection = !this.showNextBtnSection;
    this.showRegisterBtn = !this.showRegisterBtn;
    (<HTMLInputElement>document.getElementById('body')).style.height = '100vh';
    (<HTMLInputElement>document.getElementById('image-section')).style.paddingTop = '6% !important';
  }
  selectFile(event: any) {
    if (event.target.files) {
      this.selectedFile = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {
        this.showImageIcon = !this.showImageIcon;
        this.showimagePreviewSection = !this.showimagePreviewSection;
        this.preview = event.target.result;
      }
    }
  }
  onSubmit(shopRegistrationForm: NgForm): void {
    if (!this.shopNameChecker.test((<HTMLInputElement>document.getElementById('shopName')).value)) {
      Swal.fire({
        text: 'Please Give Valid Name....',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (!this.phoneChecker.test((<HTMLInputElement>document.getElementById('shopPhone')).value)) {
      Swal.fire({
        text: 'Please Give Valid Phone Number...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (!this.shopEmailCheck.test((<HTMLInputElement>document.getElementById('shopEmail')).value)) {
      Swal.fire({
        text: 'Please Give Valid email...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (!this.passwordChecker.test((<HTMLInputElement>document.getElementById('shopPassword')).value)) {
      Swal.fire({
        text: 'Password must be in 3-8 characters...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if ((<HTMLInputElement>document.getElementById('image-upload')).value == "" || (<HTMLInputElement>document.getElementById('image-upload')).value == null) {
      Swal.fire({
        text: 'Please Give Photo...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (this.shopAddress.nativeElement.value==""||this.shopAddress.nativeElement.value=="null"||this.shopAddress.nativeElement.value=="Null") {
      Swal.fire({
        text: 'Please Give Shop Address...',
        color:'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      console.log(this.shop);
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;
      this.shopService.uploadImage(uploadData).subscribe(
        (response) => {
          if (response.status == 200) {
            this.shopService.addNewShop(this.shop).subscribe(
              (response1) => {
                console.log(response1);
                Swal.fire({
                  icon: 'success',
                  title: 'Successfully Done',
                  html: '<span style="color:red;">Please Note The Username For Login.</span><br/><br/><span style="color:#35a5a7;">Your Username : ' + response1,
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                }).then((result) => {
                  if (result.isConfirmed) {
                    shopRegistrationForm.reset();
                  }
                });
              },
              (error) => {
                console.log(error);
                Swal.fire({
                  icon: 'error',
                  title: 'Something went Wrong!!!',
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                }).then((result) => {
                  if (result.isConfirmed) {
                    shopRegistrationForm.reset();
                  }
                });
              }
            )
          }
        },
      );
    }
  }
  ngOnInit(): void {

  }

}
