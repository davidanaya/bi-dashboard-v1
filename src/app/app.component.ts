import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state-management/state';

import { LoadConfigAction } from 'app/state-management/actions/config';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'cp-app',
  template: `
    <h2>BI Dashboard</h2>
    <label>
      <input type="checkbox" [(ngModel)]="showPane" />
      Show Configuration Pane
    </label>
    <section class="main">
      <cp-config-pane *ngIf="showPane"></cp-config-pane>
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showPane = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadConfigAction());
  }

}
