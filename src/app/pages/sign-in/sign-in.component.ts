import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Modelclass/customer';
import { CustomerLoginService } from 'src/app/services/customer-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  emailChecker: RegExp = /^[a-zA-Z0-9._\-]+[@][a-zA-Z.]+[a-z]{2,3}$/;
  passwordChecker: RegExp = /^[A-Za-z0-9]{8}$/;

  customer:Customer=new Customer();

  constructor(private customerLoginService:CustomerLoginService,private router:Router) { }

  ngOnInit(): void {}


  signin(){
    console.log("clicked");
   
    if (!this.emailChecker.test((<HTMLInputElement>document.getElementById("customerEmail")).value)) {
      Swal.fire({
        text: 'Please Give Valid Email Address...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.passwordChecker.test((<HTMLInputElement>document.getElementById("customerPassword")).value)) {
      Swal.fire({
        text: 'Password should be 8 characters and do not contains any special characters...',
        color: 'red',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      console.log(this.customer);
      this.customerLoginService.generateToken(this.customer).subscribe((data)=>{
        console.log("Login Successfully Done !!!");
        console.log(data);  

        //login customer
        this.customerLoginService.loginCustomer(data.token);

        this.customerLoginService.getCurrentCustomerRole().subscribe((role)=>{
          this.customerLoginService.setCustomerRole(role);
          console.log(role);
          if(this.customerLoginService.getCustomerRole()==='CUSTOMER'){
              this.router.navigate(['user-dashboard/home']);
          }else{
            this.customerLoginService.logout();
          }
        });

      },
      (error)=>{
        console.log("Error!!!!");
        console.log(error);
      }
      );
    }
  }
}
