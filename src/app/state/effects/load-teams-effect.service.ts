import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Actions, Effect } from '@ngrx/effects';

import { Action } from '@ngrx/store';

import { LOAD_TEAMS_ACTION, TeamsLoadedAction } from 'app/state/actions/teams';
import { TeamsService } from 'app/services/teams.service';

@Injectable()
export class LoadTeamsEffectService {
  @Effect()
  config$: Observable<Action> = this.actions$
    .ofType(LOAD_TEAMS_ACTION)
    .switchMap(() => this.service.getTeams())
    .map(teams => new TeamsLoadedAction(teams));

  constructor(private actions$: Actions, private service: TeamsService) {}
}
