import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cp-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section">
      <h3>{{ data?.title }}</h3>
      <nav class="navigation">
        <a *ngFor="let item of data?.dashboards" [routerLink]="item.link">&nbsp;{{ item.title }}&nbsp;</a>
      </nav>
    </div>
  `,
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  static ref = 'section';

  @Input() data: any;
}
