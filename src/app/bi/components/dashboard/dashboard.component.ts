import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'cp-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>{{ data?.title }}</h3>
    <nav class="navigation">
      <a [routerLink]="parent">← Back</a>
    </nav>
    <div class="widgets-container {{ data?.layout }}">
      <cp-widget *ngFor="let widget of data.widgets" [type]="widget"></cp-widget>
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
    return this.data ? `/bi/${this.data.parent}` : '';
  }
}
