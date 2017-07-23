import { Action } from '@ngrx/store';

import { AppState, INITIAL_STATE } from 'app/state/state';

import { OPCOS_LOADED_ACTION } from 'app/state/actions/performance';
import { FINANCE_KPIS_LOADED_ACTION } from 'app/state/actions/finance';
import { CONFIG_LOADED_ACTION } from 'app/state/actions/config';

import {
  USER_AUTHENTICATED_ACTION,
  USER_LOGGED_OUT_ACTION
} from 'app/state/actions/auth';

import { handleFinanceKpisLoadedAction } from 'app/state/reducers/finance-reducers';
import { handleOpcosLoadedAction } from 'app/state/reducers/performance-reducers';
import { handleConfigLoadedAction } from 'app/state/reducers/config-reducers';
import {
  handleUserAuthenticatedAction,
  handleUserLoggedOutAction
} from 'app/state/reducers/auth-reducers';


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
    case USER_AUTHENTICATED_ACTION:
      return handleUserAuthenticatedAction(state, action);
    case USER_LOGGED_OUT_ACTION:
      return handleUserLoggedOutAction(state, action);
    default:
      return state;
  }
}
