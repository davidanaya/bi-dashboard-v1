import { Action } from '@ngrx/store';

import { Team } from 'app/models/team.model';

export const TEAMS_LOADED_ACTION = 'TEAMS_LOADED_ACTION';

export class TeamsLoadedAction implements Action {
  type = TEAMS_LOADED_ACTION;

  constructor(public payload?: Team[]) {}
}
