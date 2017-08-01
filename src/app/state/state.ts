import { User } from 'app/auth/shared/models/user.model';

export interface AppState {
  user: User;
  config: any;
}

export const INITIAL_STATE: AppState = {
  user: undefined,
  config: {}
};
