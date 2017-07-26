import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { CONFIG_MOCK } from '../data/config.mock';
import { AuthService } from 'app/auth/shared/services/auth.service';
import { ConfigLoadedAction } from 'app/state/actions/config';

@Injectable()
export class ConfigService {
  config$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  getData(): Observable<any> {
    if (!this.config$) {
      this.init();
    }
    return this.config$;
  }

  private init() {
    this.config$ = this.db
      .object(`configs/${this.uid}`)
      .map(data => data.$exists() || CONFIG_MOCK);
  }

  get uid() {
    return this.authService.user.uid;
  }
}
