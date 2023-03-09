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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
