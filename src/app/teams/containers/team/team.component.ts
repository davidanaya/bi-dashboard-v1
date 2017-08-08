import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { TeamsService } from '../../services/teams.service';
import { Team } from 'app/models/team.model';

@Component({
  selector: 'cp-team',
  template: `
    <div class="team">
      <div class="team__title">
        <h1>
          <span *ngIf="team$ | async as team; else title">
            {{ team.name ? 'Edit' : 'Create' }} team
          </span>
          <ng-template #title>
            Loading...
          </ng-template>
        </h1>
      </div>
      <div *ngIf="team$ | async as team; else loading">
        <cp-team-form
          [team]="team"
          (create)="addTeam($event)"
          (update)="updateTeam($event)"
          (remove)="removeTeam($event)">
        </cp-team-form>
      </div>
      <ng-template #loading>
        <div class="message">
          Fetching team...
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  team$: Observable<Team>;
  subscription: Subscription;

  constructor(
    private teamsService: TeamsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.teamsService.teams$.subscribe();
    this.team$ = this.route.params.switchMap(param => this.teamsService.getTeam(param.id));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addTeam(event: Team) {
    try {
      await this.teamsService.addTeam(event);
    } catch (e) {
      console.error(e);
    }
    this.backToTeams();
  }

  async updateTeam(event: Team) {
    const key = this.route.snapshot.params.id;
    await this.teamsService.updateTeam(key, event);
    this.backToTeams();
  }

  async removeTeam(event: Team) {
    const key = this.route.snapshot.params.id;
    try {
      await this.teamsService.removeTeam(key);
    } catch (e) {
      console.error('Error', e);
    }
    this.backToTeams();
  }

  backToTeams() {
    this.router.navigate(['teams']);
  }
}
