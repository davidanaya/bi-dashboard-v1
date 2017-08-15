import { AppState } from 'app/state/state';
import { DataRoomsLoadedAction } from 'app/state/actions/data-rooms';

export function handleDataRoomsLoadedAction(
  state: AppState,
  action: DataRoomsLoadedAction
): AppState {
  const dataRooms = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.dataRooms = dataRooms;
  return newState;
}
