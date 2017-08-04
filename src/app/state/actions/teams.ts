import { Action } from '@ngrx/store';

import { Team } from 'app/services/teams.service';

export const LOAD_TEAMS_ACTION = 'LOAD_TEAMS_ACTION';
export const TEAMS_LOADED_ACTION = 'TEAMS_LOADED_ACTION';

export class LoadTeamsAction {
  type = LOAD_TEAMS_ACTION;
}

export class TeamsLoadedAction implements Action {
  type = TEAMS_LOADED_ACTION;

  constructor(public payload?: Team[]) {}
}
