import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { Team } from 'app/models/team.model';
import { TeamsService } from 'app/admin/shared/services/teams/teams.service';

@Component({
  selector: 'cp-teams',
  template: `
    <div class="teams">
      <div class="teams__title">
        <h2>Your teams</h2>
        <a class="btn__add" [routerLink]="['../teams/new']">New team</a>
      </div>
      <div *ngIf="teams$ | async as teams; else loading;">
        <div class="message" *ngIf="!teams.length">
          No teams, add a new team to start
        </div>
        <cp-list-item *ngFor="let team of teams" [item]="team" (remove)="removeTeam($event)"></cp-list-item>
      </div>
      <ng-template #loading>
        <div class="message">
          Fetching teams...
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {
  teams$: Observable<Team[]>;
  subscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private teamsService: TeamsService
  ) {}

  ngOnInit() {
    this.teams$ = this.store.select<Team[]>('teams');
    this.subscription = this.teamsService.teams$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeTeam(event: Team) {
    this.teamsService.removeTeam(event.$key);
  }
}
