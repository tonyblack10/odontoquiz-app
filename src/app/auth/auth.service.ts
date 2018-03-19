import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JwtHelper } from 'angular2-jwt'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { User } from './user.model';
import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {

  user: User;

  constructor(private jwtHelper: JwtHelper,
              private http: HttpClient) {
    if(this.getToken()) {
      this.setUser();
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.api}/token`, { email, password })
      .do(res => {
        localStorage.setItem('token', res.token);
        this.setUser();
      });
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setUser() {
    const payload = this.jwtHelper.decodeToken(this.getToken());
    this.user = { name: payload.name, email: payload.email, isAdmin: payload.isAdmin };
  }

  getUser(): User {
    return this.user;
  }

  isAdmin(): boolean {
    return this.user.isAdmin;
  }

  isLoggedIn(): boolean {
    if(!this.getToken()) {
      return false;
    }

    return true;
  }

}