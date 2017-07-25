import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { CONFIG_MOCK } from 'app/shared/data/config.mock';
import { AuthService } from 'app/auth/shared/services/auth.service';
import { ConfigLoadedAction } from 'app/state/actions/config';

@Injectable()
export class ConfigService {
  config: any;
  config$: Observable<any> = this.db
    .object(`/config`)
    .do(data => this.store.dispatch(new ConfigLoadedAction(data)));

  constructor(
    private store: Store<AppState>,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  get uid() {
    return this.authService.user.uid;
  }

  getData(): Observable<any> {
    return this.config
      ? Observable.of(this.config)
      : Observable.of(CONFIG_MOCK).do(config => (this.config = config));
  }
}
