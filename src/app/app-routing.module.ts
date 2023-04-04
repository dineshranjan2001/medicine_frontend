import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ShopAddMedicinesContentsComponent } from './components/shop-add-medicines-contents/shop-add-medicines-contents.component';
import { ShopHomeContentsComponent } from './components/shop-home-contents/shop-home-contents.component';
import { ShopMystoreContentsComponent } from './components/shop-mystore-contents/shop-mystore-contents.component';
import { ShopProfileContentsComponent } from './components/shop-profile-contents/shop-profile-contents.component';
import { ShopUpdateMedicinesContentsComponent } from './components/shop-update-medicines-contents/shop-update-medicines-contents.component';
import { ShopUpdateProfileContentsComponent } from './components/shop-update-profile-contents/shop-update-profile-contents.component';
import { ShopDashboardComponent } from './pages/shop-dashboard/shop-dashboard.component';
import { ShopSignInComponent } from './pages/shop-sign-in/shop-sign-in.component';
import { ShopSignUpComponent } from './pages/shop-sign-up/shop-sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { UserHomeContentsComponent } from './components/user-home-contents/user-home-contents.component';
import { UserWishlistContentsComponent } from './components/user-wishlist-contents/user-wishlist-contents.component';
import { UserOrdersHistoryContentsComponent } from './components/user-orders-history-contents/user-orders-history-contents.component';
import { UserProfileContentsComponent } from './components/user-profile-contents/user-profile-contents.component';
import { UserUpdateMyprofileContentsComponent } from './components/user-update-myprofile-contents/user-update-myprofile-contents.component';
import { UserIndivisualProductDetailsContentsComponent } from './components/user-indivisual-product-details-contents/user-indivisual-product-details-contents.component';
import { UserCategorywiseproductContentsComponent } from './components/user-categorywiseproduct-contents/user-categorywiseproduct-contents.component';
import { UserMycartContentsComponent } from './components/user-mycart-contents/user-mycart-contents.component';

const routes: Routes = [
  {
    path: "sign-in",
    component: SignInComponent,
    pathMatch: "full"
  },
  {
    path:"sign-up",
    component:SignUpComponent,
    pathMatch:"full"
  },
  {
    path:"shop-sign-in",
    component:ShopSignInComponent,
    pathMatch:"full"
  },
  {
    path:"shop-sign-up",
    component:ShopSignUpComponent,
    pathMatch:"full"
  },
  {
    path:'customer/forgot-email',
    component:ForgotPasswordComponent,
    pathMatch:'full'
  },
  {
    path:'shop/forgot-email',
    component:ForgotPasswordComponent,
    pathMatch:'full'
  },
  {
    path:'shop-dashboard',
    component:ShopDashboardComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        component:ShopHomeContentsComponent,  
      },
      {
        path:'mystore',
        component:ShopMystoreContentsComponent
      },
      {
        path:'add-medicine',
        component:ShopAddMedicinesContentsComponent
      },
      {
        path:'update-medicine/:medicineId',
        component:ShopUpdateMedicinesContentsComponent
      },
      {
        path:'profile',
        component:ShopProfileContentsComponent
      },
      {
        path:'update-profile',
        component:ShopUpdateProfileContentsComponent
      }
    ]
    
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        component:UserHomeContentsComponent
      },
      {
        path:'my-wishlist',
        component:UserWishlistContentsComponent
      },
      {
        path:'my-carts',
        component:UserMycartContentsComponent
      },
      {
        path:'my-orders',
        component:UserOrdersHistoryContentsComponent
      },
      {
        path:'my-profile',
        component:UserProfileContentsComponent
      },
      {
        path:'update-my-profile',
        component:UserUpdateMyprofileContentsComponent
      },
      {
        path:'product-details',
        component:UserIndivisualProductDetailsContentsComponent
      },
      {
        path:'product-category',
        component:UserCategorywiseproductContentsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
