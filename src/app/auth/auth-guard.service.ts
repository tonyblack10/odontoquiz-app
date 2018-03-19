import { Injector, Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Router, Route } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {
  
  constructor(private authService: AuthService, private router: Router) {}
 
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }

  canLoad(route: Route): boolean {
    if(!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }

}