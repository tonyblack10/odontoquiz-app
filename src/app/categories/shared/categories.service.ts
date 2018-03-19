import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Category } from './category.model';
import { environment } from './../../../environments/environment';
import { Page } from './../../shared/paginate/page.model';

@Injectable()
export class CategoriesService {
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.api}/categories/all`);
  }

  getPaginated(page = 1, search = ''): Observable<Page> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('q', search);
    
    return this.http.get<Page>(`${environment.api}/categories`, { params });
  }

  getById(_id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.api}/categories/${_id}`);
  }

  save(category: Category): Observable<any> {
    return this.http.post<any>(`${environment.api}/categories`, category);
  }

  update(category: Category, _id: string): Observable<string> {
    return this.http.put<string>(`${environment.api}/categories/${_id}`, category);
  }

  remove(_id: string): Observable<string> {
    return this.http.delete<string>(`${environment.api}/categories/${_id}`);
  }
}