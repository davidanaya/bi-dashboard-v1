import { FinanceKpi } from 'app/shared/models/finance-kpi';
import { Opco } from 'app/shared/models/opco';
import { User } from 'app/auth/shared/services/auth.service';

export interface AppState {
  user: User;
  configuration: any;
}

export const INITIAL_STATE: AppState = {
  user: undefined,
  configuration: {}
};
