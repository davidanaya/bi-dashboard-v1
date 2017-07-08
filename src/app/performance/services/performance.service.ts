import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { PERFORMANCE_MOCK } from './performance.mock';

@Injectable()
export class PerformanceService {
  constructor() {}

  getData(): Observable<any> {
    return Observable.of(PERFORMANCE_MOCK);
  }
}
