import { AppState } from 'app/state-management/state';
import { ConfigLoadedAction } from 'app/state-management/actions/config';

export function handleConfigLoadedAction(
  state: AppState,
  action: ConfigLoadedAction
): AppState {
  const config = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.configuration = config;
  return newState;
}
