import { AppState } from 'app/state/state';

import { UserAuthenticatedAction, UserLoggedOutAction } from 'app/state/actions/auth';

export function handleUserAuthenticatedAction(
  state: AppState,
  action: UserAuthenticatedAction
): AppState {
  const user = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.user = user;
  return newState;
}

export function handleUserLoggedOutAction(
  state: AppState,
  action: UserLoggedOutAction
): AppState {
  const newState: AppState = Object.assign({}, state);
  newState.user = null;
  return newState;
}
