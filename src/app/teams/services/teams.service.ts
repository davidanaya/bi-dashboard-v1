import { Injectable, Inject } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { AuthService } from 'app/auth/shared/services/auth.service';
import { TeamsLoadedAction } from 'app/state/actions/teams';
import { Team } from 'app/models/team.model';
import { Member } from 'app/models/member.model';

@Injectable()
export class TeamsService {
  sdkDB: any;

  teams$: Observable<Team[]> = this.findTeamsForMember()
    .mergeMap(fobs => Observable.combineLatest(fobs))
    .map(teams => teams.map(t => this.firebaseToViewModel(t)))
    .do(teams => this.store.dispatch(new TeamsLoadedAction(teams)));

  constructor(
    private store: Store<AppState>,
    private db: AngularFireDatabase,
    private authService: AuthService,
    @Inject(FirebaseApp) fb
  ) {
    this.sdkDB = fb.database().ref();
  }

  private findTeamsForMember(): Observable<Team[]> {
    return this.db
      .list(`members/${this.uid}/teams`)
      .map(teams => teams.map(t => t.$key))
      .map(keys => keys.map(k => this.db.object(`teams/${k}`)));
  }

  get uid() {
    return this.authService.user.uid;
  }

  getTeam(key: string) {
    if (!key) {
      return Observable.of({});
    }
    return this.store
      .select<Team[]>('teams')
      .filter(Boolean)
      .map(teams => teams.find((team: Team) => team.$key === key));
  }

  addTeam(team: Team) {
    const newTeamKey = this.sdkDB.child('teams').push().key;

    const dataToSave = {};
    team.members.forEach(member => {
      dataToSave[`members/${member}/teams/${newTeamKey}`] = true;
    });
    dataToSave[`teams/${newTeamKey}`] = this.viewModelToFirebase(team);

    return this.sdkDB.update(dataToSave);
  }

  updateTeam(key: string, team: Team) {
    const dataToUpdate = {};

    this.findMembersInTeam(key)
      .take(1)
      .do(members => {
        members.forEach(m => {
          // remove members not in the new team
          if (team.members.indexOf(m) === -1) {
            dataToUpdate[`members/${m}/teams/${key}`] = null;
          }
        });
        team.members.forEach(m => {
          // add new members in team
          if (members.indexOf(m) === -1) {
            dataToUpdate[`members/${m}/teams/${key}`] = true;
          }
        });

        dataToUpdate[`teams/${key}`] = this.viewModelToFirebase(team);
        this.sdkDB.update(dataToUpdate);
      })
      .toPromise();
  }

  removeTeam(key: string) {
    const dataToRemove = {};
    dataToRemove[`teams/${key}`] = null;

    return this.findMembersInTeam(key)
      .do(members => {
        members.forEach(member => {
          dataToRemove[`members/${member}/teams/${key}`] = null;
        });

        this.sdkDB.update(dataToRemove);
      })
      .toPromise();
  }

  private findMembersInTeam(key: string): Observable<string[]> {
    return this.db
      .list(`teams/${key}/members`)
      .map(members => members.map(m => m.$key));
  }

  private viewModelToFirebase(team: Team): any {
    // need to convert to firebase db recommended structure
    const members = team.members.reduce((acc, cur, i) => {
      acc[cur] = true;
      return acc;
    }, {});
    return Object.assign(team, { members });
  }

  private firebaseToViewModel(team: any): Team {
    if (team.$exists()) {
      const members = Object.keys(team.members);
      return Object.assign(team, { members });
    }
  }
}
