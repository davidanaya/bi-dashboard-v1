import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FINANCE_MOCK } from 'app/services/finance.mock';
import { FinanceKpi } from 'app/shared/models/finance-kpi';

@Injectable()
export class FinanceService {
  constructor() {}

  getData(): Observable<FinanceKpi[]> {
    return Observable.of(FINANCE_MOCK);
  }
}
