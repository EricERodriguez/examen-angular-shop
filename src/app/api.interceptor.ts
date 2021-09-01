import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  token:any = localStorage.getItem("token");
  

  constructor() {}
  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // const authHeader = this.auth.getToken()

    const authHeader = 'Bearer '+ this.token;
    // const authHeader = '';

    const authReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        authHeader
      )
    })
    return next.handle(authReq);
  }
}
