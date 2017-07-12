import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cp-section',
  template: `
    <h3>{{ data?.title }}</h3>
    <nav class="navigation">
      <a [routerLink]="'/home'">&nbsp;Home&nbsp;</a>
      <a *ngFor="let item of data?.dashboards" [routerLink]="item.link">&nbsp;{{ item.title }}&nbsp;</a>
    </nav>
    <pre>{{ data | json }}</pre>
  `,
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  static ref = 'section';

  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
