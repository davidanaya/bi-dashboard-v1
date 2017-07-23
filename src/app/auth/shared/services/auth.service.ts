import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { UserLoggedOutAction, UserAuthenticatedAction } from 'app/state/actions/auth';

export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
}

@Injectable()
export class AuthService {
  auth$ = this.af.authState.do(next => {
    if (!next) {
      this.store.dispatch(new UserLoggedOutAction());
      return;
    }
    const user: User = {
      email: next.email,
      uid: next.uid,
      authenticated: true
    };
    this.store.dispatch(new UserAuthenticatedAction(user));
  });

  constructor(private af: AngularFireAuth, private store: Store<AppState>) {}

  get authState() {
    return this.af.authState;
  }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    return this.af.auth.signOut();
  }
}
