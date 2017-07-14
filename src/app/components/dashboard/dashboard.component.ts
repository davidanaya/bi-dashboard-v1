import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cp-dashboard',
  template: `
    <h3>{{ data?.title }}</h3>
    <nav class="navigation">
      <a [routerLink]="parent">← Back</a>
    </nav>
    <div *ngFor="let widget of data.widgets">
      <cp-widget [type]="widget"></cp-widget>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  static ref = 'dashboard';

  @Input() data: any;

  constructor() {}

  ngOnInit() {}

  get parent() {
    return this.data ? `/${this.data.parent}` : '';
  }
}
