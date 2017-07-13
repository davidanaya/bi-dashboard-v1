import { FinanceKpi } from 'app/shared/models/finance-kpi';
import { Opco } from 'app/shared/models/opco';

export interface AppState {
  configuration: any;
  financeKpis: FinanceKpi[];
  opcos: Opco[];
}

export const INITIAL_STATE: AppState = {
  configuration: {},
  financeKpis: [],
  opcos: []
};
