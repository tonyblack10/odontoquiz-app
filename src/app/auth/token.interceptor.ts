import { AuthService } from './auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthService);
    if(authService.isLoggedIn()) {
      req = req.clone({
        setHeaders: { Authorization: `JWT ${authService.getToken()}` }
      });
    }
    
    return next.handle(req);
  }

}