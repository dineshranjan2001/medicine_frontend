import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    title:"Shop Register Here",
    pathMatch:"full"
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
