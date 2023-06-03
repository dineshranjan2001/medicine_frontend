import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Modelclass/customer';
import { CommunicationService } from 'src/app/services/communication.service';
import { CustomerLoginService } from 'src/app/services/customer-login.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-user-side-nav',
  templateUrl: './user-side-nav.component.html',
  styleUrls: ['./user-side-nav.component.css']
})
export class UserSideNavComponent implements OnInit {

  customerProfile:Customer=new Customer();

  constructor(private customerService:CustomerService,private comService:CommunicationService,private customerLoginService:CustomerLoginService,private router:Router) {
    this.comService.updateState.subscribe((isTrue)=>{
      if(isTrue===true){
        this.customerService.getNavbarInformation().subscribe((resonse2)=>{
          this.customerProfile=resonse2.customerDetails;
        });
      }
    })
   }

  ngOnInit(): void {
    this.customerService.getNavbarInformation().subscribe((response)=>{
      this.customerProfile=response.customerDetails;
    });

    this.comService.changeEmitted$.subscribe((data)=>{
      this.customerService.getNavbarInformation().subscribe((response1)=>{
        this.customerProfile=response1.customerDetails;
      });
    });
  }


  customerLogout(){
    console.log("clicked in customerLogin function");
    this.customerLoginService.logout();
    this.router.navigate(['mediorder/sign-in']);
  }

}
