import { AppState } from 'app/state-management/state';
import { OpcosLoadedAction } from 'app/state-management/actions/performance';

export function handleOpcosLoadedAction(
  state: AppState,
  action: OpcosLoadedAction
): AppState {
  const opcos = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.opcos = opcos;
  return newState;
}
