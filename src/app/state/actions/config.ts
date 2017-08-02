import { Action } from '@ngrx/store';

import { Config } from 'app/models/config.model';

export const LOAD_CONFIG_ACTION = 'LOAD_CONFIG_ACTION';
export const UPDATE_CONFIG_ACTION = 'UPDATE_CONFIG_ACTION';
export const CONFIG_LOADED_ACTION = 'CONFIG_LOADED_ACTION';

export class LoadConfigAction {
  type = LOAD_CONFIG_ACTION;
}

export class UpdateConfigAction implements Action {
  type = UPDATE_CONFIG_ACTION;

  constructor(public payload?: Config) {}
}

export class ConfigLoadedAction implements Action {
  type = CONFIG_LOADED_ACTION;

  constructor(public payload?: Config) {}
}
