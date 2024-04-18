import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Modelclass/customer';
import { CommunicationService } from 'src/app/services/communication.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-update-myprofile-contents',
  templateUrl: './user-update-myprofile-contents.component.html',
  styleUrls: ['./user-update-myprofile-contents.component.css']
})
export class UserUpdateMyprofileContentsComponent implements OnInit {


  customerDetails: Customer = new Customer();
  selectedFile: any
  nameChecker: RegExp = /[A-Za-z-0-9]+/
  addressChecker: RegExp = /^[A-Za-z0-9'\.\-\s\,]+$/;
  emailChecker: RegExp = /^[a-zA-Z0-9._\-]+[@][a-zA-Z.]+[a-z]{2,3}$/;
  phoneChecker: RegExp = /^[6789][0-9]{9}$/;
  passwordChecker: RegExp = /^[A-Za-z0-9]{8}$/;

  constructor(
    private customerProfileService: UserProfileService,
    private router:Router,
    private comService:CommunicationService
    ) { }

  ngOnInit(): void {
    this.customerProfileService.getUserProfileDetails().subscribe((response) => {
      this.customerDetails = response.customerDetails;
    });
  }

  onSelectedFile(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onFormSubmit(updateCustomerDetailsForm: NgForm) {
    if (!this.nameChecker.test((<HTMLInputElement>document.getElementById('customerFirstName')).value)) {
      Swal.fire({
        text: 'Please Give Valid First Name...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.nameChecker.test((<HTMLInputElement>document.getElementById('customerLastName')).value)) {
      Swal.fire({
        text: 'Please Give Valid Last Name...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.phoneChecker.test((<HTMLInputElement>document.getElementById('customerPhone')).value)) {
      Swal.fire({
        text: 'Please Give Valid Phone Number...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.emailChecker.test((<HTMLInputElement>document.getElementById('customerEmail')).value)) {
      Swal.fire({
        text: 'Please Give Valid Email...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.addressChecker.test((<HTMLInputElement>document.getElementById('customerAddress')).value)) {
      Swal.fire({
        text: 'Please Give Valid Address...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      if ((<HTMLInputElement>document.getElementById('customerPhoto')).value) {
        const uploadData = new FormData();
        uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
        this.customerProfileService.uploadImage(uploadData).subscribe((response1) => {
          console.log(response1);
          this.customerDetails.customerPhoto = response1;
          if (response1) {
            console.log("enter into if block");
            this.customerProfileService.setUpdatedCustomerDetails(this.customerDetails).subscribe((response2) => {
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
                    this.comService.emitChange();
                     this.router.navigate(['/user-dashboard/my-profile']);
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
          } else {
            console.log("enter into else block");
            console.log(this.customerDetails);
            this.customerProfileService.setUpdatedCustomerDetails(this.customerDetails).subscribe((response3) => {
              console.log(response3);
              console.log(response3.success == true);
              if (response3.success == true) {
                Swal.fire({
                  icon: 'success',
                  title: response3.message,
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.router.navigate(['/user-dashboard/my-profile']);
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
        });
      }
      if ((<HTMLInputElement>document.getElementById('customerPassword')).value) {
        
        let getPassword = (<HTMLInputElement>document.getElementById('customerPassword')).value;
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
            this.customerDetails.customerPassword = getPassword;
            this.customerProfileService.setUpdatedCustomerDetails(this.customerDetails).subscribe((response4) => {
              console.log(response4);
              console.log(response4.success == true);
              if (response4.success == true) {
                Swal.fire({
                  icon: 'success',
                  title: response4.message,
                  confirmButtonColor: '#35a5a7',
                  confirmButtonText: 'Ok'
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.router.navigate(['/user-dashboard/my-profile']);
                  }
                });
              } else if (response4.success == false) {
                Swal.fire({
                  icon: 'error',
                  title: response4.message,
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
        }else{
          Swal.fire({
            text: 'Password should be in 3-8 characters and it cannot contains any special characters...',
            color: 'red',
            showConfirmButton: false,
            timer: 1500
          })
        } 
      }else{
        console.log("enter into else block and save it");
        this.customerProfileService.setUpdatedCustomerDetails(this.customerDetails).subscribe((response5) => {
          console.log(response5);
          console.log(response5.success == true);
          if (response5.success == true) {
            Swal.fire({
              icon: 'success',
              title: response5.message,
              confirmButtonColor: '#35a5a7',
              confirmButtonText: 'Ok'
            }).then((result) => {
              if (result.isConfirmed) {
                this.comService.emitChange();
                this.router.navigate(['/user-dashboard/my-profile']);
              }
            });
          } else if (response5.success == false) {
            Swal.fire({
              icon: 'error',
              title: response5.message,
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
