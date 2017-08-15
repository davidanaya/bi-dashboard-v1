import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from 'app/auth/shared/services/auth.service';
import { Member } from 'app/models/member.model';
import { ProfileLoadedAction } from 'app/state/actions/profile';

@Injectable()
export class MembersService {

  profile$: Observable<Member> = this.db.object(`members/${this.uid}`)
    .do(profile => this.store.dispatch(new ProfileLoadedAction(profile)));

  constructor(
    private store: Store<AppState>,
    private db: AngularFireDatabase,
    private authService: AuthService) {
  }

  get uid() {
    return this.authService.user.uid;
  }

  addMember(member: Member) {
    return this.db.list(`members`).push(member);
  }

  updateMember(key: string, member: Member) {
    return this.db.object(`members/${key}`).update(member);
  }
}
