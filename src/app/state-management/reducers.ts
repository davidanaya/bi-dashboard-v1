import { Action, ActionReducer } from '@ngrx/store';

import { AppState, INITIAL_STATE } from 'app/state-management/state';
import {
  FINANCE_KPIS_LOADED_ACTION,
  FinanceKpisLoadedAction,
  OpcosLoadedAction,
  OPCOS_LOADED_ACTION
} from 'app/state-management/actions';

export function storeReducer(state: AppState = INITIAL_STATE, action: Action): AppState {
  switch (action.type) {
    case FINANCE_KPIS_LOADED_ACTION:
      return handleFinanceKpisLoadedAction(state, action);
    case OPCOS_LOADED_ACTION:
      return handleOpcosLoadedAction(state, action);
    default:
      return state;
  }
}

function handleFinanceKpisLoadedAction(
  state: AppState,
  action: FinanceKpisLoadedAction
): AppState {
  const financeKpis = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.financeKpis = financeKpis;
  return newState;
}

function handleOpcosLoadedAction(
  state: AppState,
  action: OpcosLoadedAction
): AppState {
  const opcos = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.opcos = opcos;
  return newState;
}
