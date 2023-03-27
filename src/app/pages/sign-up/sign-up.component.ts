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

  ngOnInit(): void {
  }

  submitRegistration() {
    console.log(this.customer);
    this.customerService.addNewCustomer(this.customer).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Successfully Done',
          confirmButtonColor: '#35a5a7',
          confirmButtonText: 'Ok'
        }).then((result)=>{
          if(result.isConfirmed){
            (<HTMLInputElement>document.getElementById("firstName")).value="";
            (<HTMLInputElement>document.getElementById("lastName")).value="";
            (<HTMLInputElement>document.getElementById("Phone")).value="";
            (<HTMLInputElement>document.getElementById("email")).value="";
            (<HTMLInputElement>document.getElementById("password")).value="";
          }
        });
      }, (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: error,
          confirmButtonColor: '#35a5a7',
          confirmButtonText: 'Ok'
        }).then((result)=>{
          if(result.isConfirmed){
            (<HTMLInputElement>document.getElementById("firstName")).value="";
            (<HTMLInputElement>document.getElementById("lastName")).value="";
            (<HTMLInputElement>document.getElementById("Phone")).value="";
            (<HTMLInputElement>document.getElementById("email")).value="";
            (<HTMLInputElement>document.getElementById("password")).value="";
          }
        });
      }
    )
  }
}
