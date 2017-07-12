import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { CONFIG_MOCK } from 'app/data/config.mock';

@Injectable()
export class ConfigService {
  constructor() {}

  getData(): Observable<any> {
    return Observable.of(CONFIG_MOCK);
  }
}
