import { Component, OnInit } from '@angular/core';

import { Statistics } from './../shared/statistics/statistics.model';
import { StatisticsService } from './../shared/statistics/statistics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  statistics: Statistics;

  constructor(private service: StatisticsService) { }

  ngOnInit() {
    this.service.getStatistics()
      .subscribe(res => this.statistics = res);
  }

}
