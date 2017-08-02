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
    default:
      return state;
  }
}
