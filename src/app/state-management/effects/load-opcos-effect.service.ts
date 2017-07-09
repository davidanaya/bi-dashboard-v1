import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { PerformanceService } from 'app/services/performance.service';

import {
  LOAD_OPCOS_ACTION,
  OpcosLoadedAction
} from 'app/state-management/actions';

@Injectable()
export class LoadOpcosEffectService {
  @Effect()
  opcos$: Observable<Action> = this.actions$
    .ofType(LOAD_OPCOS_ACTION)
    .switchMap(() => this.service.getData())
    .map(opcos => new OpcosLoadedAction(opcos));

  constructor(private actions$: Actions, private service: PerformanceService) {}
}
