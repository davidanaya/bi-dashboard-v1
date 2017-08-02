import { User } from 'app/auth/shared/models/user.model';
import { Config } from 'app/models/config.model';

export interface AppState {
  user: User;
  config: Config;
}

export const INITIAL_STATE: AppState = {
  user: undefined,
  config: undefined
};
