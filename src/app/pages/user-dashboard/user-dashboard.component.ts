import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  profilePic!: any;
  totalWishlistProuctNos!: number;
  totalOrderProductNos!: number;
  constructor(private customerService: CustomerService, private comService: CommunicationService) {
    this.comService.updateState.subscribe((isTrue) => {
      if (isTrue === true) {
        this.customerService.getNavbarInformation().subscribe((response2) => {
          this.profilePic = response2.customerDetails.fileName;
          this.totalWishlistProuctNos = response2.totalWishlistProuctNos;
          this.totalOrderProductNos = response2.totalOrderProductNos;
        });
      }
    });
  }

  ngOnInit(): void {
    this.customerService.getNavbarInformation().subscribe((response) => {
      this.profilePic = response.customerDetails.fileName;
      this.totalWishlistProuctNos = response.totalWishlistProuctNos;
      this.totalOrderProductNos = response.totalOrderProductNos;
    });

    this.comService.changeEmitted$.subscribe((data) => {
      this.customerService.getNavbarInformation().subscribe((response1) => {
        this.profilePic = response1.customerDetails.fileName;
        this.totalWishlistProuctNos = response1.totalWishlistProuctNos;
        this.totalOrderProductNos = response1.totalOrderProductNos;
      });
    });
  }

}
