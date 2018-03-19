import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  userIsAdmin(): boolean {
    return this.authService.isAdmin();
  }

}
