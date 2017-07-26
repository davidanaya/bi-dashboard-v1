import { User } from 'app/auth/shared/services/auth.service';

export interface AppState {
  user: User;
  config: any;
}

export const INITIAL_STATE: AppState = {
  user: undefined,
  config: {}
};
