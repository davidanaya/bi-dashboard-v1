import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { Team } from 'app/services/teams.service';
import { LoadTeamsAction } from 'app/state/actions/teams';

@Component({
  selector: 'cp-teams',
  template: `
    <h3>Teams Page</h3>
    <div>{{ teams$ | async | json }}</div>
  `,
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams$: Observable<Team[]>;
  subscription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.teams$ = this.store.select<Team[]>('teams');
    this.store.dispatch(new LoadTeamsAction());
  }

}
