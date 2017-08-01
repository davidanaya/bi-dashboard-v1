import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';
import { LoadConfigAction } from 'app/state/actions/config';

@Component({
  selector: 'cp-app-nav',
  template: `
    <div class="app-nav">
      <a [routerLink]="'/'">&nbsp;Home&nbsp;</a>
      <a *ngFor="let item of sections" [routerLink]="item.link">&nbsp;{{ item.title }}&nbsp;</a>
    </div>
  `,
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {
  sections: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select('config')
      .filter((data: any) => data.pages)
      .map((data: any) => data.pages.filter(page => page.parent === 'home'))
      .map(sections => (this.sections = sections))
      .subscribe();

    this.store.dispatch(new LoadConfigAction());
  }
}
