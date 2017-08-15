import { Action } from '@ngrx/store';

import { AppState, INITIAL_STATE } from 'app/state/state';

import { CONFIG_LOADED_ACTION } from 'app/state/actions/config';

import {
  USER_AUTHENTICATED_ACTION,
  USER_LOGGED_OUT_ACTION
} from 'app/state/actions/auth';

import { handleConfigLoadedAction } from 'app/state/reducers/config-reducers';
import {
  handleUserAuthenticatedAction,
  handleUserLoggedOutAction
} from 'app/state/reducers/auth-reducers';

import { handleTeamsLoadedAction } from 'app/state/reducers/teams-reducer';
import { TEAMS_LOADED_ACTION } from 'app/state/actions/teams';

import { PROFILE_LOADED_ACTION } from 'app/state/actions/profile';
import { handleProfileLoadedAction } from 'app/state/reducers/profile-reducer';

import { DATA_ROOMS_LOADED_ACTION } from 'app/state/actions/data-rooms';
import { handleDataRoomsLoadedAction } from 'app/state/reducers/data-rooms-reducers';

export function storeReducer(
  state: AppState = INITIAL_STATE,
  action: Action
): AppState {
  switch (action.type) {
    case CONFIG_LOADED_ACTION:
      return handleConfigLoadedAction(state, action);
    case USER_AUTHENTICATED_ACTION:
      return handleUserAuthenticatedAction(state, action);
    case USER_LOGGED_OUT_ACTION:
      return handleUserLoggedOutAction(state, action);
    case PROFILE_LOADED_ACTION:
      return handleProfileLoadedAction(state, action);
    case TEAMS_LOADED_ACTION:
      return handleTeamsLoadedAction(state, action);
    case DATA_ROOMS_LOADED_ACTION:
      return handleDataRoomsLoadedAction(state, action);
    default:
      return state;
  }
}
