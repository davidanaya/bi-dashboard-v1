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

@Injectable()
export class TeamsService {
  sdkDB: any;
  // teams$: Observable<Team[]> = this.db
  //   .list(`teams/${this.uid}`)
  //   .do(next => this.store.dispatch(new TeamsLoadedAction(next)));

  teams$: Observable<Team[]> = this.findTeamsKeysForMember()
    .mergeMap(fobs => Observable.combineLatest(fobs))
    .do(next => this.store.dispatch(new TeamsLoadedAction(next)));

  constructor(
    private store: Store<AppState>,
    private db: AngularFireDatabase,
    private authService: AuthService,
    @Inject(FirebaseApp) fb
  ) {
    this.sdkDB = fb.database().ref();
  }

  private findTeamsKeysForMember(): Observable<Team[]> {
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
    console.log('addTeam', team);
    const newTeamKey = this.sdkDB.child('teams').push().key;

    const dataToSave = {};
    dataToSave[`teams/${newTeamKey}`] = team;
    dataToSave[`members/${this.uid}/teams/${newTeamKey}`] = true;

    return this.sdkDB.update(dataToSave);
  }

  updateTeam(key: string, team: Team) {
    return this.db.object(`teams/${this.uid}/${key}`).update(team);
  }

  removeTeam(key: string) {
    return this.db.list(`teams/${this.uid}`).remove(key);
  }
}
