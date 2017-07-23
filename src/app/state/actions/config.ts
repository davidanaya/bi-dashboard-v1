import { Action } from '@ngrx/store';

export const LOAD_CONFIG_ACTION = 'LOAD_CONFIG_ACTION';
export const CONFIG_LOADED_ACTION = 'CONFIG_LOADED_ACTION';

export class LoadConfigAction {
  type = LOAD_CONFIG_ACTION;
}

export class ConfigLoadedAction implements Action {
  type = CONFIG_LOADED_ACTION;

  constructor(public payload?: any) {}
}
