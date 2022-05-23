import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userAccessToken = localStorage.getItem('access-token');
    if (userAccessToken) {
      request = request.clone({
        headers: request.headers.set('Authorization', userAccessToken)
      });
    }
    return next.handle(request);
  }
}
