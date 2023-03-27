import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import Swal from 'sweetalert2';
import { ShopMystoreShowcategoriesComponent } from '../shop-mystore-showcategories/shop-mystore-showcategories.component';

@Component({
  selector: 'app-shop-mystore-contents',
  templateUrl: './shop-mystore-contents.component.html',
  styleUrls: ['./shop-mystore-contents.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopMystoreContentsComponent implements OnInit {
  pageno:number=1;
  @ViewChild('showCategories',{read:ViewContainerRef,static:true})showCategories!:ViewContainerRef;
  constructor() { }

  ngOnInit(): void {
  }
  showComponent(){
    this.showCategories.clear();
    this.showCategories.createComponent(ShopMystoreShowcategoriesComponent);
  }
  confirmBox(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
