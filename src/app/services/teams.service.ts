import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { AuthService } from 'app/auth/shared/services/auth.service';
import { LoadTeamsAction } from 'app/state/actions/teams';
import { TEAMS_MOCK } from 'app/services/teams.mock';

export interface Team {
  name: string;
}

@Injectable()
export class TeamsService {
  teams$: Observable<Team[]>;

  constructor(
    private store: Store<AppState>,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  getTeams(): Observable<Team[]> {
    if (!this.teams$) {
      this.init();
    }
    return this.teams$;
  }

  private init() {
    this.teams$ = this.db
      .list(`teams/${this.uid}`)
      .map(data => data.length ? data : TEAMS_MOCK);
  }

  get uid() {
    return this.authService.user.uid;
  }
}
