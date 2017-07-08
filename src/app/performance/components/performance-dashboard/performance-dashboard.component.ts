import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PerformanceService } from 'app/performance/services/performance.service';

@Component({
  selector: 'cp-performance-dashboard',
  template: `
    <h2>Performance Dashboard</h2>
    <ul>
      <li *ngFor="let opco of (data$ | async).opcos">{{ opco.name }}</li>
    </ul>
  `,
  styleUrls: ['./performance-dashboard.component.scss']
})
export class PerformanceDashboardComponent implements OnInit {
  data$: Observable<any>;

  constructor(private service: PerformanceService) {}

  ngOnInit() {
    this.data$ = this.service.getData();
  }
}
