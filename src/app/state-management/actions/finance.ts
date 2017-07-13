import { Action } from '@ngrx/store';

import { FinanceKpi } from 'app/shared/models/finance-kpi';

export const FINANCE_KPIS_LOADED_ACTION = 'FINANCE_KPIS_LOADED_ACTION';
export const LOAD_FINANCE_KPIS_ACTION = 'LOAD_FINANCE_KPIS_ACTION';

export class LoadFinanceKpisAction {
  type = LOAD_FINANCE_KPIS_ACTION;
}

export class FinanceKpisLoadedAction implements Action {
  type = FINANCE_KPIS_LOADED_ACTION;

  constructor(public payload?: FinanceKpi[]) {}
}
