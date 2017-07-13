import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { CONFIG_MOCK } from 'app/data/config.mock';

@Injectable()
export class ConfigService {
  config: any;

  constructor() {}

  getData(): Observable<any> {
    return this.config
      ? Observable.of(this.config)
      : Observable.of(CONFIG_MOCK).do(config => (this.config = config));
  }
}
