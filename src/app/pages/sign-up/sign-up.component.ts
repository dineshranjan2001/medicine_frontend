import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Customer } from 'src/app/Modelclass/customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  customer: Customer = new Customer();

  nameChecker: RegExp = /^[a-zA-Z ]{3,20}$/;
  emailChecker: RegExp = /^[a-zA-Z0-9._\-]+[@][a-zA-Z.]+[a-z]{2,3}$/;
  phoneChecker: RegExp = /^[6789][0-9]{9}$/;
  addressChecker: RegExp = /^[A-Za-z0-9'\.\-\s\,&]+$/;
  passwordChecker: RegExp = /^[A-Za-z0-9]{8}$/;

  ngOnInit(): void {
  }

  submitRegistration() {
    console.log(this.customer);
    if (!this.nameChecker.test((<HTMLInputElement>document.getElementById("firstName")).value)) {
      Swal.fire({
        text: 'Please Give Valid Name...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.nameChecker.test((<HTMLInputElement>document.getElementById("lastName")).value)) {
      Swal.fire({
        text: 'Please Give Valid Name...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.phoneChecker.test((<HTMLInputElement>document.getElementById("Phone")).value)) {
      Swal.fire({
        text: 'Please Give Valid Phone Number...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.emailChecker.test((<HTMLInputElement>document.getElementById("email")).value)) {
      Swal.fire({
        text: 'Please Give Valid Email Address...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.passwordChecker.test((<HTMLInputElement>document.getElementById("password")).value)) {
      Swal.fire({
        text: 'Password should be 8 characters and do not contains any special characters...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.addressChecker.test((<HTMLInputElement>document.getElementById("address")).value)) {
      Swal.fire({
        text: 'Please Give Valid Address...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      this.customerService.addNewCustomer(this.customer).subscribe(
        (data) => {
          console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Successfully Done',
            confirmButtonColor: '#35a5a7',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
              (<HTMLInputElement>document.getElementById("firstName")).value = "";
              (<HTMLInputElement>document.getElementById("lastName")).value = "";
              (<HTMLInputElement>document.getElementById("Phone")).value = "";
              (<HTMLInputElement>document.getElementById("email")).value = "";
              (<HTMLInputElement>document.getElementById("password")).value = "";
              (<HTMLInputElement>document.getElementById("address")).value = "";
            }
          });
        }, (error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: error,
            confirmButtonColor: '#35a5a7',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
              (<HTMLInputElement>document.getElementById("firstName")).value = "";
              (<HTMLInputElement>document.getElementById("lastName")).value = "";
              (<HTMLInputElement>document.getElementById("Phone")).value = "";
              (<HTMLInputElement>document.getElementById("email")).value = "";
              (<HTMLInputElement>document.getElementById("password")).value = "";
              (<HTMLInputElement>document.getElementById("address")).value = "";
            }
          });
        }
      )
    }
  }
}
