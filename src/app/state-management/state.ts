import { FinanceKpi } from 'app/shared/models/finance-kpi';
import { Opco } from 'app/shared/models/opco';

export interface AppState {
  financeKpis: FinanceKpi[];
  opcos: Opco[];
}

export const INITIAL_STATE: AppState = {
  financeKpis: [],
  opcos: []
};
