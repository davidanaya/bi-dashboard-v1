import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-performance',
  template: `
    <h2>Performance</h2>
  `,
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
