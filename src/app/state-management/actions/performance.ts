import { Action } from '@ngrx/store';

import { Opco } from 'app/shared/models/opco';

export const OPCOS_LOADED_ACTION = 'OPCOS_LOADED_ACTION';
export const LOAD_OPCOS_ACTION = 'LOAD_OPCOS_ACTION';

export class LoadOpcosAction {
  type = LOAD_OPCOS_ACTION;
}

export class OpcosLoadedAction implements Action {
  type = OPCOS_LOADED_ACTION;

  constructor(public payload?: Opco[]) {}
}
