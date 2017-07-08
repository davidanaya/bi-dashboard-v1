import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { FinanceService } from 'app/finance/services/finance.service';

@Component({
  selector: 'cp-finance-dashboard',
  template: `
    <h2>Finance Dashboard</h2>
    <ul>
      <li *ngFor="let opco of (data$ | async).rows">{{ opco.name }}</li>
    </ul>
  `,
  styleUrls: ['./finance-dashboard.component.scss']
})
export class FinanceDashboardComponent implements OnInit {
  data$: Observable<any>;

  constructor(private service: FinanceService) {}

  ngOnInit() {
    this.data$ = this.service.getData();
  }
}
