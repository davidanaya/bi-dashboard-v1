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
    <section class="main">
      <cp-config-pane></cp-config-pane>
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadConfigAction());
  }

}
