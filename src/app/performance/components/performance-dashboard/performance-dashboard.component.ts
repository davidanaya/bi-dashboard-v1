import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { AppState } from 'app/state-management/state';
import { LoadOpcosAction } from 'app/state-management/actions';

import { Opco } from 'app/shared/models/opco';

@Component({
  selector: 'cp-performance-dashboard',
  template: `
    <h2>Performance Dashboard</h2>
    <ul>
      <li *ngFor="let opco of opcos$ | async">{{ opco.name }}</li>
    </ul>
  `,
  styleUrls: ['./performance-dashboard.component.scss']
})
export class PerformanceDashboardComponent implements OnInit {
  opcos$: Observable<Opco[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.opcos$ = this.store.select('opcos');
    this.store.dispatch(new LoadOpcosAction());
  }
}
