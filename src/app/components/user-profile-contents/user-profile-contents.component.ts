import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Modelclass/customer';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-profile-contents',
  templateUrl: './user-profile-contents.component.html',
  styleUrls: ['./user-profile-contents.component.css']
})
export class UserProfileContentsComponent implements OnInit {

  customerDetails:Customer=new Customer();
  totalWishlistProuctNos!:number;
  totalOrderProductNos!:number;

  constructor(private userProfileService:UserProfileService) { }

  ngOnInit(): void {

    this.userProfileService.getUserProfileDetails().subscribe((response)=>{
      console.log(response);
      this.customerDetails=response.customerDetails;
      this.totalWishlistProuctNos=response.totalWishlistProuctNos;
      this.totalOrderProductNos=response.totalOrderProductNos;
    });

  }

}
