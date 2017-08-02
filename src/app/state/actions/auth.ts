import { Action } from '@ngrx/store';

import { User } from 'app/auth/shared/models/user.model';

export const USER_AUTHENTICATED_ACTION = 'USER_AUTHENTICATED_ACTION';
export const USER_LOGGED_OUT_ACTION = 'USER_LOGGED_OUT_ACTION';

export class UserAuthenticatedAction implements Action {
  type = USER_AUTHENTICATED_ACTION;

  constructor(public payload?: User) {}
}

export class UserLoggedOutAction implements Action {
  type = USER_LOGGED_OUT_ACTION;

  constructor(public payload?: User) {}
}
