import { AppState } from 'app/state/state';
import { ProfileLoadedAction } from 'app/state/actions/profile';

export function handleProfileLoadedAction(
  state: AppState,
  action: ProfileLoadedAction
): AppState {
  const profile = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.profile = profile.$exists() ? profile : { name: '' };
  return newState;
}
