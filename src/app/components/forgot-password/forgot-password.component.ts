import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAndForgotPassword } from 'src/app/Modelclass/login-and-forgot-password';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotPasswordComponent implements OnInit {

  routerValue!: string;
  emailChecker: RegExp = /^[A-Za-z0-9\\.\\-]+[@]+[a-z]+[.]+[a-z]{2,3}$/;
  passwordChecker: RegExp = /^[A-Za-z0-9]{8}$/;
  userNameChecker: RegExp = /^[a-z\_]+$/;

  forgotPassword: LoginAndForgotPassword = new LoginAndForgotPassword();

  constructor(
    private location: Location, 
    private router: Router,
    private forgotPasswordService:ForgotPasswordService) {
    this.routerValue = router.url;
  }

  ngOnInit(): void {
  }


  onSubmit(forgotForm: NgForm) {
    console.log("submit");
    if(this.routerValue==='/shop/forgot-email'){
      console.log("enter into if block..............");
      if (!this.userNameChecker.test((<HTMLInputElement>document.getElementById('userName')).value)) {
        Swal.fire({
          text: 'Please Give Valid Username....',
          color: 'red',
          showConfirmButton: false,
          timer: 1500
        });
      }else if (!this.passwordChecker.test((<HTMLInputElement>document.getElementById('userPassword')).value)) {
        Swal.fire({
          text: 'Please Give Valid User Password....',
          color: 'red',
          showConfirmButton: false,
          timer: 1500
        });
      }else if (!this.passwordChecker.test((<HTMLInputElement>document.getElementById('comfirmPassword')).value)) {
        Swal.fire({
          text: 'Please Give Valid Comfirm Password....',
          color: 'red',
          showConfirmButton: false,
          timer: 1500
        });
      }else {
        if (this.forgotPassword.userPassword==this.forgotPassword.comfirmPassword){
          console.log(this.forgotPassword);
          this.forgotPasswordService.saveForgotPassword(this.forgotPassword.userName,this.forgotPassword.userPassword).subscribe((response1)=>{
            console.log(response1);
            if(response1.success==true){
              Swal.fire({
                icon: 'success',
                title: response1.message,
                confirmButtonColor: '#35a5a7',
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigate(['/shop-sign-in']);
                }
              });
            }else if(response1.success==false){
              Swal.fire({
                icon: 'error',
                title: response1.message,
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
          })
        }else{
          Swal.fire({
            text: 'Password MissMatch!!!!',
            color: 'red',
            showConfirmButton: false,
            timer: 1500
          });
          forgotForm.reset();
        }
      }
    }else{
      console.log("enter into else block..............");
      if (!this.emailChecker.test((<HTMLInputElement>document.getElementById('userEmail')).value)) {
        Swal.fire({
          text: 'Please Give Valid Email Address....',
          color: 'red',
          showConfirmButton: false,
          timer: 1500
        });
      }else if (!this.passwordChecker.test((<HTMLInputElement>document.getElementById('userPassword')).value)) {
        Swal.fire({
          text: 'Please Give Valid User Password....',
          color: 'red',
          showConfirmButton: false,
          timer: 1500
        });
      }else if (!this.passwordChecker.test((<HTMLInputElement>document.getElementById('comfirmPassword')).value)) {
        Swal.fire({
          text: 'Please Give Valid Comfirm Password....',
          color: 'red',
          showConfirmButton: false,
          timer: 1500
        });
      }else {
        if (this.forgotPassword.userPassword==this.forgotPassword.comfirmPassword){
          console.log(this.forgotPassword);
          this.forgotPasswordService.saveForgotPassword(this.forgotPassword.userEmail,this.forgotPassword.userPassword).subscribe((response2)=>{
            console.log(response2);
            if(response2.success==true){
              Swal.fire({
                icon: 'success',
                title: response2.message,
                confirmButtonColor: '#35a5a7',
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigate(['/sign-in']);
                }
              });
            }else if(response2.success==false){
              Swal.fire({
                icon: 'error',
                title: response2.message,
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
          })
        }else{
          Swal.fire({
            text: 'Password MissMatch!!!!',
            color: 'red',
            showConfirmButton: false,
            timer: 1500
          });
          forgotForm.reset();
        }
      }
    }
    }

    back(): void {
      this.location.back();
    }
  }
