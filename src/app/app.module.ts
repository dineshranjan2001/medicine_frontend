import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ShopSignInComponent } from './pages/shop-sign-in/shop-sign-in.component';
import { ShopSignUpComponent } from './pages/shop-sign-up/shop-sign-up.component';
import { ShopDashboardComponent } from './pages/shop-dashboard/shop-dashboard.component';
import { ShopSideNavComponent } from './components/shop-side-nav/shop-side-nav.component';
import { ShopHomeContentsComponent } from './components/shop-home-contents/shop-home-contents.component';
import { ShopMystoreContentsComponent } from './components/shop-mystore-contents/shop-mystore-contents.component';
import { ShopMystoreShowcategoriesComponent } from './components/shop-mystore-showcategories/shop-mystore-showcategories.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ShopAddMedicinesContentsComponent } from './components/shop-add-medicines-contents/shop-add-medicines-contents.component';
import { ShopUpdateMedicinesContentsComponent } from './components/shop-update-medicines-contents/shop-update-medicines-contents.component';
import { ShopProfileContentsComponent } from './components/shop-profile-contents/shop-profile-contents.component';
import { ShopUpdateProfileContentsComponent } from './components/shop-update-profile-contents/shop-update-profile-contents.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserSideNavComponent } from './components/user-side-nav/user-side-nav.component';
import { UserHomeContentsComponent } from './components/user-home-contents/user-home-contents.component';
import { UserWishlistContentsComponent } from './components/user-wishlist-contents/user-wishlist-contents.component';
import { UserMycartContentsComponent } from './components/user-mycart-contents/user-mycart-contents.component';
import { UserProfileContentsComponent } from './components/user-profile-contents/user-profile-contents.component';
import { UserCategorywiseproductContentsComponent } from './components/user-categorywiseproduct-contents/user-categorywiseproduct-contents.component';
import { UserOrdersHistoryContentsComponent } from './components/user-orders-history-contents/user-orders-history-contents.component';
import { UserUpdateMyprofileContentsComponent } from './components/user-update-myprofile-contents/user-update-myprofile-contents.component';
import { UserIndivisualProductDetailsContentsComponent } from './components/user-indivisual-product-details-contents/user-indivisual-product-details-contents.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    UserDashboardComponent,
    ShopSignInComponent,
    ShopSignUpComponent,
    ShopDashboardComponent,
    ShopSideNavComponent,
    ShopHomeContentsComponent,
    ShopMystoreContentsComponent,
    ShopMystoreShowcategoriesComponent,
    ShopAddMedicinesContentsComponent,
    ShopUpdateMedicinesContentsComponent,
    ShopProfileContentsComponent,
    ShopUpdateProfileContentsComponent,
    ForgotPasswordComponent,
    FooterComponent,
    UserSideNavComponent,
    UserHomeContentsComponent,
    UserWishlistContentsComponent,
    UserMycartContentsComponent,
    UserProfileContentsComponent,
    UserCategorywiseproductContentsComponent,
    UserOrdersHistoryContentsComponent,
    UserUpdateMyprofileContentsComponent,
    UserIndivisualProductDetailsContentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    NgxHideOnScrollModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
