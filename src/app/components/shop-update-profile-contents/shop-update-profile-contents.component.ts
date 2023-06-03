import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Shop } from 'src/app/Modelclass/shop';
import { CommunicationService } from 'src/app/services/communication.service';
import { UpdateShopProfileService } from 'src/app/services/update-shop-profile.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-shop-update-profile-contents',
  templateUrl: './shop-update-profile-contents.component.html',
  styleUrls: ['./shop-update-profile-contents.component.css']
})
export class ShopUpdateProfileContentsComponent implements OnInit {

  constructor(
    private updateProfileService: UpdateShopProfileService,
    private comService: CommunicationService,
    private router: Router
  ) { }

  nameChecker: RegExp = /^[a-zA-Z ]{3,20}$/;
  emailChecker: RegExp = /^[a-zA-Z0-9._\-]+[@][a-zA-Z.]+[a-z]{2,3}$/;
  phoneChecker: RegExp = /^[6789][0-9]{9}$/;
  addressChecker: RegExp = /^[A-Za-z0-9'\.\-\s\,]+$/;
  passwordChecker: RegExp = /^[A-Za-z0-9]{8}$/;
  shopNameChecker: RegExp = /^[a-zA-Z ]{3,30}$/;
  shopEmailCheck: RegExp = /^[A-Za-z.-]+[@][a-z]+[.][a-z]{2,3}$/;

  shop: Shop = new Shop();
  selectedFile!: any;

  ngOnInit(): void {
    this.updateProfileService.getProfileDetails().subscribe((response) => {
      console.log(response);
      this.shop = response;
    });
  }

  onSelectedFile(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onSubmit(shopUpdateForm: NgForm) {

    if (!this.shopNameChecker.test((<HTMLInputElement>document.getElementById('shopName')).value)) {
      Swal.fire({
        text: 'Please Give Valid Name....',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (!this.phoneChecker.test((<HTMLInputElement>document.getElementById('shopPhone')).value)) {
      Swal.fire({
        text: 'Please Give Valid Phone Number...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (!this.shopEmailCheck.test((<HTMLInputElement>document.getElementById('shopEmail')).value)) {
      Swal.fire({
        text: 'Please Give Valid email...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if ((<HTMLInputElement>document.getElementById('shopAddress')).value == "" || (<HTMLInputElement>document.getElementById('shopAddress')).value == "null" || (<HTMLInputElement>document.getElementById('shopAddress')).value == "Null") {
      Swal.fire({
        text: 'Please Give Shop Address...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (!this.nameChecker.test((<HTMLInputElement>document.getElementById('ownerFirstName')).value)) {
      Swal.fire({
        text: 'Please Give Valid Name...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.nameChecker.test((<HTMLInputElement>document.getElementById('ownerLastName')).value)) {
      Swal.fire({
        text: 'Please Give Valid Name...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (!this.phoneChecker.test((<HTMLInputElement>document.getElementById('ownerPhone')).value)) {
      Swal.fire({
        text: 'Please Give Valid Phone Number...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      if ((<HTMLInputElement>document.getElementById('shopPhoto')).value) {
        const uploadData = new FormData();
        uploadData.append('updateImageFile', this.selectedFile, this.selectedFile.name);
        this.updateProfileService.uploadImage(uploadData).subscribe((response) => {
          console.log(response);
          this.shop.shopPhoto = response;
          if (response) {
            console.log(this.shop);
            this.updateProfileService.saveUpdatedProfileDetails(this.shop).subscribe((response1) => {
              console.log(response1);
              if (response1.success == true) {
                Swal.fire({
                  icon: 'success',
                  title: response1.message,
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.comService.emitChange();
                    this.router.navigate(['/shop-dashboard/profile']);
                  }
                });
              } else if (response1.success == false) {
                Swal.fire({
                  icon: 'error',
                  title: response1.message,
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Something Went Wrong!!!',
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                });
              }
            });
          }
        });
      }
      if ((<HTMLInputElement>document.getElementById('shopPassword')).value) {

        let getPassword = (<HTMLInputElement>document.getElementById('shopPassword')).value;
        if (getPassword != null) {
          if (!this.passwordChecker.test(getPassword)) {
            Swal.fire({
              text: 'Password should be in 3-8 characters and it cannot contains any special characters...',
              color: 'red',
              showConfirmButton: false,
              timer: 1500
            })
          }else {
            console.log("enter into password else block and save it");
            this.shop.shopPassword = getPassword;
            this.updateProfileService.saveUpdatedProfileDetails(this.shop).subscribe((response2) => {
              console.log(response2);
              console.log(response2.success == true);
              if (response2.success == true) {
                Swal.fire({
                  icon: 'success',
                  title: response2.message,
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.router.navigate(['/shop-dashboard/profile']);
                  }
                });
              } else if (response2.success == false) {
                Swal.fire({
                  icon: 'error',
                  title: response2.message,
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Something Went Wrong!!!',
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                });
              }
            });
          }
        } else{
          Swal.fire({
            text: 'Password should be in 3-8 characters and it cannot contains any special characters...',
            color: 'red',
            showConfirmButton: false,
            timer: 1500
          })
        }
      } else {
        console.log(this.shop);
        this.updateProfileService.saveUpdatedProfileDetails(this.shop).subscribe((response3) => {
          console.log(response3);
          if (response3.success == true) {
            Swal.fire({
              icon: 'success',
              title: response3.message,
              confirmButtonColor: '#35a5a7',
              confirmButtonText: 'Ok'
            }).then((result) => {
              if (result.isConfirmed) {
                this.comService.emitChange();
                this.router.navigate(['/shop-dashboard/profile']);
              }
            });
          } else if (response3.success == false) {
            Swal.fire({
              icon: 'error',
              title: response3.message,
              confirmButtonColor: '#35a5a7',
              confirmButtonText: 'Ok'
            });
          } else {
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
}

