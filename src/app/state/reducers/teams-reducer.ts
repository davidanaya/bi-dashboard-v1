import { AppState } from 'app/state/state';
import { TeamsLoadedAction } from 'app/state/actions/teams';

export function handleTeamsLoadedAction(
  state: AppState,
  action: TeamsLoadedAction
): AppState {
  const teams = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.teams = teams;
  return newState;
}
