import { AppState } from 'app/state/state';
import { ConfigLoadedAction } from 'app/state/actions/config';

export function handleConfigLoadedAction(
  state: AppState,
  action: ConfigLoadedAction
): AppState {
  const config = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.config = config;
  return newState;
}
