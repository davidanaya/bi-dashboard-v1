import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { AppState } from 'app/state-management/state';
import { LoadFinanceKpisAction } from 'app/state-management/actions';

import { FinanceKpi } from 'app/shared/models/finance-kpi';

@Component({
  selector: 'cp-finance-dashboard',
  template: `
    <h2>Finance Dashboard</h2>
    <ul>
      <li *ngFor="let opco of financeKpis$ | async">{{ opco.name }}</li>
    </ul>
  `,
  styleUrls: ['./finance-dashboard.component.scss']
})
export class FinanceDashboardComponent implements OnInit {
  financeKpis$: Observable<FinanceKpi[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.financeKpis$ = this.store.select('financeKpis');
    this.store.dispatch(new LoadFinanceKpisAction());
  }
}
