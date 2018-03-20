import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Statistics } from './statistics.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class StatisticsService {
  
  constructor(private http: HttpClient) {}

  getStatistics(): Observable<Statistics> {
    return this.http.get<Statistics>(`${environment.api}/statistics`);
  }
}