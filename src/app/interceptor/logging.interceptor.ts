import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authoriz } from '../interface/authoriz';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('access_token');
    request=request.clone({setHeaders: {Authorization: 'Bearer ' + token}})
    console.log(token)
    console.log(request)
    return next.handle(request);
  }
}
