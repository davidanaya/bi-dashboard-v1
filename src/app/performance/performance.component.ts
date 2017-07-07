import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-performance',
  template: `
    <p>performance dashboards</p>
    <ul>
      <li *ngFor="let dashboard of (dashboards$ | async)">
        {{ dashboard.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  dashboards$: Observable<any> = this.route.data.pluck('layout');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
