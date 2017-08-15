import { Action } from '@ngrx/store';

import { DataRoom } from 'app/models/data-room.model';

export const DATA_ROOMS_LOADED_ACTION = 'DATA_ROOMS_LOADED_ACTION';

export class DataRoomsLoadedAction implements Action {
  type = DATA_ROOMS_LOADED_ACTION;

  constructor(public payload?: DataRoom[]) {}
}
