import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { Team } from 'app/models/team.model';
import { TeamsService } from 'app/admin/shared/services/teams/teams.service';
import { DataRoom } from 'app/models/data-room.model';
import { DataRoomsService } from 'app/admin/shared/services/data-rooms/data-rooms.service';

@Component({
  selector: 'cp-data-room',
  template: `
    <div class="data-room">
      <div class="data-room__title">
        <h1>
          <span *ngIf="dataRoom$ | async as dataRoom; else title">
            {{ dataRoom.name ? 'Edit' : 'Create' }} data room
          </span>
          <ng-template #title>
            Loading...
          </ng-template>
        </h1>
      </div>
      <div *ngIf="dataRoom$ | async as dataRoom; else loading">
        <cp-data-room-form
          [dataRoom]="dataRoom"
          (create)="addDataRoom($event)"
          (update)="updateDataRoom($event)"
          (remove)="removeDataRoom($event)">
        </cp-data-room-form>
      </div>
      <ng-template #loading>
        <div class="message">
          Fetching data room...
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./data-room.component.scss']
})
export class DataRoomComponent implements OnInit, OnDestroy {
  dataRoom$: Observable<DataRoom>;
  subscription: Subscription;

  constructor(
    private dataRoomsService: DataRoomsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.dataRoomsService.dataRooms$.subscribe();
    this.dataRoom$ = this.route.params.switchMap(param =>
      this.dataRoomsService.getDataRoom(param.id)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addDataRoom(event: DataRoom) {
    try {
      await this.dataRoomsService.addDataRoom(event);
    } catch (e) {
      console.error('addDataRoom', e);
    }
    this.backToTeams();
  }

  async updateDataRoom(event: DataRoom) {
    const key = this.route.snapshot.params.id;
    try {
      await this.dataRoomsService.updateDataRoom(key, event);
    } catch (e) {
      console.error('updateDataRoom', e);
    }
    this.backToTeams();
  }

  async removeDataRoom(event: Team) {
    const key = this.route.snapshot.params.id;
    try {
      await this.dataRoomsService.removeDataRoom(key);
    } catch (e) {
      console.error('removeDataRoom', e);
    }
    this.backToTeams();
  }

  backToTeams() {
    this.router.navigate(['data-rooms']);
  }
}
