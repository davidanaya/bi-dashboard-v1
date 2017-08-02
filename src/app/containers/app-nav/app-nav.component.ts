import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';
import { LoadConfigAction } from 'app/state/actions/config';
import { Config, Page } from 'app/models/config.model';

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
  sections: Page[];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select('config')
      .filter((data: Config) => data && !!data.pages)
      .map((data: Config) => data.pages.filter(page => page.parent === 'home'))
      .map((sections: Page[]) => (this.sections = sections))
      .subscribe();

    this.store.dispatch(new LoadConfigAction());
  }
}
