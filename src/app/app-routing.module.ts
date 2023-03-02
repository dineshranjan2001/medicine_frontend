import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
