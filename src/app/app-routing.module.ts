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
import { HomeComponent } from './pages/home/home.component';
import { HomeContentsComponent } from './components/home-contents/home-contents.component';
import { CustomerGuard } from './guard/customer.guard';
import { ErrorContentsComponent } from './components/error-contents/error-contents.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'mediorder/home',
        component: HomeContentsComponent,
        pathMatch: 'full'
      },
      {
        path: 'mediorder/sign-in',
        component: SignInComponent,
        pathMatch: 'full'
      },
      {
        path: 'mediorder/sign-up',
        component: SignUpComponent,
        pathMatch: 'full'
      },
      {
        path: 'mediorder/shop-sign-in',
        component: ShopSignInComponent,
        pathMatch: 'full'
      },
      {
        path: 'mediorder/shop-sign-up',
        component: ShopSignUpComponent,
        pathMatch: 'full'
      },
      {
        path: 'mediorder/customer/forgot-email',
        component: ForgotPasswordComponent,
        pathMatch: 'full'
      },
      {
        path: 'mediorder/shop/forgot-email',
        component: ForgotPasswordComponent,
        pathMatch: 'full'
      },

    ]
  },

  {
    path: '',
    component: ShopDashboardComponent,
    children: [
      {
        path: 'shop-dashboard/home',
        component: ShopHomeContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'shop-dashboard/mystore',
        component: ShopMystoreContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'shop-dashboard/add-medicine',
        component: ShopAddMedicinesContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'shop-dashboard/update-medicine/:medicineId',
        component: ShopUpdateMedicinesContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'shop-dashboard/profile',
        component: ShopProfileContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'shop-dashboard/update-profile',
        component: ShopUpdateProfileContentsComponent,
         pathMatch: 'full'
      }
    ]

  },
  {
    path: '',
    component: UserDashboardComponent,
    canActivate: [CustomerGuard],
    children: [
      {
        path: 'user-dashboard/home',
        component: UserHomeContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'user-dashboard/my-wishlist',
        component: UserWishlistContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'user-dashboard/my-carts',
        component: UserMycartContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'user-dashboard/my-orders',
        component: UserOrdersHistoryContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'user-dashboard/my-profile',
        component: UserProfileContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'user-dashboard/update-my-profile',
        component: UserUpdateMyprofileContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'user-dashboard/product-details/:medicineId',
        component: UserIndivisualProductDetailsContentsComponent,
         pathMatch: 'full'
      },
      {
        path: 'user-dashboard/product-category/:categoryId',
        component: UserCategorywiseproductContentsComponent,
         pathMatch: 'full'
      }
    ]
  },
  {
    path: "error-page",
    component: ErrorContentsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
