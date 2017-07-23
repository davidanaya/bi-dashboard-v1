import { AppState } from 'app/state/state';
import { OpcosLoadedAction } from 'app/state/actions/performance';

export function handleOpcosLoadedAction(
  state: AppState,
  action: OpcosLoadedAction
): AppState {
  const opcos = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.opcos = opcos;
  return newState;
}
