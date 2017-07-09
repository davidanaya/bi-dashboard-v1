import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { PERFORMANCE_MOCK } from './performance.mock';
import { Opco } from 'app/shared/models/opco';

@Injectable()
export class PerformanceService {
  constructor() {}

  getData(): Observable<Opco[]> {
    return Observable.of(PERFORMANCE_MOCK);
  }
}
