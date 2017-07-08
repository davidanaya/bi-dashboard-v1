import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FINANCE_MOCK } from './finance.mock';

@Injectable()
export class FinanceService {
  constructor() {}

  getData(): Observable<any> {
    return Observable.of(FINANCE_MOCK);
  }
}
