import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/Modelclass/order-details';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-user-orders-history-contents',
  templateUrl: './user-orders-history-contents.component.html',
  styleUrls: ['./user-orders-history-contents.component.css']
})
export class UserOrdersHistoryContentsComponent implements OnInit {

  orderDetailsList!:OrderDetails[];

  constructor(private orderHistoryServie:OrderHistoryService) { }

  ngOnInit(): void {
    this.orderHistoryServie.getAllOrderHistory().subscribe((response)=>{
      console.log(response);
        this.orderDetailsList=response;
    })
  }

}
