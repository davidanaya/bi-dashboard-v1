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
      <a routerLink="/">
        <i class="fa fa-home" aria-hidden="true"> Home</i>
      </a>
      <a routerLink="/profile" routerLinkActive="active">
        <i class="fa fa-user-circle-o" aria-hidden="true"> Profile</i>
      </a>
      <a routerLink="/data-rooms" routerLinkActive="active">
        <i class="fa fa-desktop" aria-hidden="true"> Data Rooms</i>
      </a>
      <a routerLink="/teams" routerLinkActive="active">
        <i class="fa fa-users" aria-hidden="true"> Teams</i>
      </a>
      <!-- a *ngFor="let item of sections" [routerLink]="item.link">&nbsp;{{ item.title }}&nbsp;</a -->
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
