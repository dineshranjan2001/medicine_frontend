import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { CustomerLoginService } from "../services/customer-login.service";

// const TOKEN_HEADER='Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private customerLoginService:CustomerLoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let authReq=req;
        const headerToken=this.customerLoginService.getToken();
        console.log("inside intercepter");
        if(headerToken!=null){
            authReq=authReq.clone({
                setHeaders:{Authorization:`Bearer ${headerToken}`},
            });
        }
        return next.handle(authReq);
        
    }

    // constructor(private inject:Injector) { }
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     let customerLoginService=this.inject.get(CustomerLoginService);
    //     req=req.clone({
    //         setHeaders:{
    //             Authorization: 'Bearer '+customerLoginService.getToken()
    //         },
    //     });
    //     //console.log(token);
    //     return next.handle(req);
    // }

    

    
}

//for configuration of authInterceptor
export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }
]