import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerLoginService } from '../services/customer-login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard {

  constructor(private customerLoginService: CustomerLoginService, private router: Router) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.customerLoginService.isLoggedIn() && this.customerLoginService.getCustomerRole() == 'CUSTOMER') {
      return true;
    }
    this.router.navigate(['error-page']);
    return false;
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if (this.customerLoginService.isLoggedIn() && this.customerLoginService.getCustomerRole() == 'CUSTOMER') {
  //     return true;
  //   }
  //   this.router.navigate(['error-page']);
  //   return false;
  // }

}
