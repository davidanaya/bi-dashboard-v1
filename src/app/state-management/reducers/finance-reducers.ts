import { AppState } from 'app/state-management/state';
import { FinanceKpisLoadedAction } from 'app/state-management/actions/finance';

export function handleFinanceKpisLoadedAction(
  state: AppState,
  action: FinanceKpisLoadedAction
): AppState {
  const financeKpis = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.financeKpis = financeKpis;
  return newState;
}
