import { Action } from '@ngrx/store';

export const USER_AUTHENTICATED_ACTION = 'USER_AUTHENTICATED_ACTION';
export const USER_LOGGED_OUT_ACTION = 'USER_LOGGED_OUT_ACTION';

export class UserAuthenticatedAction implements Action {
  type = USER_AUTHENTICATED_ACTION;

  constructor(public payload?: any) {}
}

export class UserLoggedOutAction implements Action {
  type = USER_LOGGED_OUT_ACTION;

  constructor(public payload?: any) {}
}
