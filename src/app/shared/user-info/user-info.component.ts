import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../auth/user.model';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  getUser(): User {
    return this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
