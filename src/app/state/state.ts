import { User } from 'app/auth/shared/models/user.model';
import { Config } from 'app/models/config.model';
import { Team } from 'app/models/team.model';

export interface AppState {
  user: User;
  config: Config;
  teams: Team[];
}

export const INITIAL_STATE: AppState = {
  user: undefined,
  config: undefined,
  teams: []
};
