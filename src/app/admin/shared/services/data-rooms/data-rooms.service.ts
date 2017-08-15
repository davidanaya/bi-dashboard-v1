import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from 'app/auth/shared/services/auth.service';
import { DataRoom } from 'app/models/data-room.model';
import { DataRoomsLoadedAction } from 'app/state/actions/data-rooms';

@Injectable()
export class DataRoomsService {
  dataRooms$: Observable<
    DataRoom[]
  > = this.findDataRoomsPerMember()
    .mergeMap(fobs => Observable.combineLatest(fobs))
    .do(dataRooms => this.store.dispatch(new DataRoomsLoadedAction(dataRooms)));

  constructor(
    private store: Store<AppState>,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  get uid() {
    return this.authService.user.uid;
  }

  getDataRoom(key: string) {
    if (!key) {
      return Observable.of({});
    }
    return this.store
      .select<DataRoom[]>('dataRooms')
      .filter(Boolean)
      .map(dataRooms => dataRooms.find((dataRoom: DataRoom) => dataRoom.$key === key));
  }

  addDataRoom(dataRoom: DataRoom) {
    console.log('adding data room');
  }

  updateDataRoom(key: string, dataRoom: DataRoom) {
    console.log('adding data room');
  }

  removeDataRoom(dataRoom: DataRoom) {
    console.log('adding data room');
  }

  private findDataRoomsPerMember(): Observable<DataRoom[]> {
    return this.db
      .list(`dataRoomsPerMember/${this.uid}`)
      .map(dataRooms => dataRooms.map(dr => dr.$key))
      .map(keys => keys.map(k => this.db.object(`dataRooms/${k}`)));
  }
}
