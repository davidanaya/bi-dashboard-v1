import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Actions, Effect } from '@ngrx/effects';

import { FinanceService } from 'app/services/finance.service';
import {
  LOAD_FINANCE_KPIS_ACTION,
  FinanceKpisLoadedAction
} from 'app/state-management/actions/finance';
import { Action } from '@ngrx/store';

@Injectable()
export class LoadFinanceEffectService {
  @Effect()
  financeKpis$: Observable<Action> = this.actions$
    .ofType(LOAD_FINANCE_KPIS_ACTION)
    .switchMap(() => this.service.getData())
    .map(financeKpis => new FinanceKpisLoadedAction(financeKpis));

  constructor(private actions$: Actions, private service: FinanceService) {}
}
