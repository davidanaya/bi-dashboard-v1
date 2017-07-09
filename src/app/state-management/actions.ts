import { Action } from '@ngrx/store';

import { Opco } from 'app/shared/models/opco';
import { FinanceKpi } from 'app/shared/models/finance-kpi';

export const FINANCE_KPIS_LOADED_ACTION = 'FINANCE_KPIS_LOADED_ACTION';

export const LOAD_FINANCE_KPIS_ACTION = 'LOAD_FINANCE_KPIS_ACTION';

export const OPCOS_LOADED_ACTION = 'OPCOS_LOADED_ACTION';

export const LOAD_OPCOS_ACTION = 'LOAD_OPCOS_ACTION';

export class LoadFinanceKpisAction {
  type = LOAD_FINANCE_KPIS_ACTION;
}

export class FinanceKpisLoadedAction implements Action {
  type = FINANCE_KPIS_LOADED_ACTION;

  constructor(public payload?: FinanceKpi[]) {}
}

export class LoadOpcosAction {
  type = LOAD_OPCOS_ACTION;
}

export class OpcosLoadedAction implements Action {
  type = OPCOS_LOADED_ACTION;

  constructor(public payload?: Opco[]) {}
}
