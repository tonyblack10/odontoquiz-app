import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Page } from './../../shared/paginate/page.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class UsersService {
  
  constructor(private http: HttpClient){}

  save(user: any): Observable<any> {
    return this.http.post<any>(`${environment.api}/users`, user);
  }

  getPaginated(page = 1, search = ''): Observable<Page> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('q', search);
    
    return this.http.get<Page>(`${environment.api}/users`, { params });
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http
      .post<any>(`${environment.api}/users/change-password`, 
        {currentPassword, newPassword});
  }

  remove(_id: string): Observable<string> {
    return this.http.delete<string>(`${environment.api}/users/${_id}`);
  }

  getByEmail(email: string) {
    return this.http
      .get(`${environment.api}/users/email/${email}`)
      .map(user => user);
  }

}