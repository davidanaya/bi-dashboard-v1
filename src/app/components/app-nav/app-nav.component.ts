import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cp-app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-nav">
      <a [routerLink]="'/'">&nbsp;Home&nbsp;</a>
      <a *ngFor="let item of sections" [routerLink]="item.link">&nbsp;{{ item.title }}&nbsp;</a>
    </div>
  `,
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  @Input() sections: any;
}
