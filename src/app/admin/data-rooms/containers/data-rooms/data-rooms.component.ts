import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';
import { DataRoom } from 'app/models/data-room.model';
import { DataRoomsService } from 'app/admin/shared/services/data-rooms/data-rooms.service';

@Component({
  selector: 'cp-data-rooms',
  template: `
    <div class="data-rooms">
      <div class="data-rooms__title">
        <h2>Your data rooms</h2>
        <a class="btn__add" [routerLink]="['../data-rooms/new']">New data room</a>
      </div>
      <div *ngIf="dataRooms$ | async as dataRooms; else loading;">
        <div class="message" *ngIf="!dataRooms.length">
          No data rooms, add a new data room to start
        </div>
        <cp-list-item *ngFor="let dataRoom of dataRooms" [item]="dataRoom" (remove)="removeDataRoom($event)"></cp-list-item>
      </div>
      <ng-template #loading>
        <div class="message">
          Fetching data rooms...
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./data-rooms.component.scss']
})
export class DataRoomsComponent implements OnInit, OnDestroy {
  dataRooms$: Observable<DataRoom[]>;
  subscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private dataRoomsService: DataRoomsService
  ) {}

  ngOnInit() {
    this.dataRooms$ = this.store.select<DataRoom[]>('dataRooms');
    this.subscription = this.dataRoomsService.dataRooms$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeDataRoom(event: any) {
    console.log('removeDataRoom', event);
    // this.dataRoomsService.removeTeam(event.$key);
  }
}
