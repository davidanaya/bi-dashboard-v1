import { Action } from '@ngrx/store';

import { Member } from 'app/models/member.model';

export const PROFILE_LOADED_ACTION = 'PROFILE_LOADED_ACTION';

export class ProfileLoadedAction implements Action {
  type = PROFILE_LOADED_ACTION;

  constructor(public payload?: Member) {}
}
