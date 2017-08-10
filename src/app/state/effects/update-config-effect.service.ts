import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Actions, Effect } from '@ngrx/effects';

import { Action } from '@ngrx/store';

import {
  UPDATE_CONFIG_ACTION,
  ConfigLoadedAction
} from 'app/state/actions/config';
import { ConfigService } from 'app/services/config.service';
import { Config } from 'app/models/config.model';

@Injectable()
export class UpdateConfigEffectService {
  @Effect({ dispatch: false })
  config$: Observable<Action> = this.actions$
    .ofType(UPDATE_CONFIG_ACTION)
    .do(action => this.updateConfig(action.payload));

  constructor(private actions$: Actions, private service: ConfigService) {}

  async updateConfig(config: Config): Promise<void> {
    await this.service.updateConfig(config);
  }
}
