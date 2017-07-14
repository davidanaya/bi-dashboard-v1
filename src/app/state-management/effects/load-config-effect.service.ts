import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Actions, Effect } from '@ngrx/effects';

import { Action } from '@ngrx/store';

import { ConfigService } from 'app/services/config.service';
import {
  ConfigLoadedAction,
  LOAD_CONFIG_ACTION
} from 'app/state-management/actions/config';

@Injectable()
export class LoadConfigEffectService {
  @Effect()
  config$: Observable<Action> = this.actions$
    .ofType(LOAD_CONFIG_ACTION)
    .switchMap(() => this.service.getData())
    .map(config => new ConfigLoadedAction(config));

  constructor(private actions$: Actions, private service: ConfigService) {
  }
}
