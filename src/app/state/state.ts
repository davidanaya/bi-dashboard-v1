import { User } from 'app/auth/shared/models/user.model';
import { Config } from 'app/models/config.model';
import { Team } from 'app/models/team.model';
import { Member } from 'app/models/member.model';

export interface AppState {
  user: User;
  profile: Member;
  config: Config;
  teams: Team[];
}

export const INITIAL_STATE: AppState = {
  user: undefined,
  profile: undefined,
  config: undefined,
  teams: []
};
