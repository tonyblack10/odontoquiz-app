import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Question } from './question.model';
import { Page } from './../../shared/paginate/page.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class QuestionsService {
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.api}/questions`);
  }

  getPaginated(page = 1, search = ''): Observable<Page> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('q', search);
    
    return this.http.get<Page>(`${environment.api}/questions`, { params });
  }

  getById(_id: string): Observable<Question> {
    return this.http.get<Question>(`${environment.api}/questions/${_id}`);
  }

  save(question: Question): Observable<any> {
    return this.http.post<any>(`${environment.api}/questions`, question);
  }

  update(question: Question, _id: string): Observable<any> {
    return this.http.put<any>(`${environment.api}/questions/${_id}`, question);
  }

  delete(_id: string): Observable<any> {
    return this.http.delete<any>(`${environment.api}/questions/${_id}`);
  }
}