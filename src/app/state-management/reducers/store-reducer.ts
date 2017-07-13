import { Action } from '@ngrx/store';

import { AppState, INITIAL_STATE } from 'app/state-management/state';

import { OPCOS_LOADED_ACTION } from 'app/state-management/actions/performance';
import { FINANCE_KPIS_LOADED_ACTION } from 'app/state-management/actions/finance';
import { CONFIG_LOADED_ACTION } from 'app/state-management/actions/config';

import { handleFinanceKpisLoadedAction } from 'app/state-management/reducers/finance-reducers';
import { handleOpcosLoadedAction } from 'app/state-management/reducers/performance-reducers';
import { handleConfigLoadedAction } from 'app/state-management/reducers/config-reducers';

export function storeReducer(
  state: AppState = INITIAL_STATE,
  action: Action
): AppState {
  switch (action.type) {
    case FINANCE_KPIS_LOADED_ACTION:
      return handleFinanceKpisLoadedAction(state, action);
    case OPCOS_LOADED_ACTION:
      return handleOpcosLoadedAction(state, action);
    case CONFIG_LOADED_ACTION:
      return handleConfigLoadedAction(state, action);
    default:
      return state;
  }
}
