import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { LoadConfigAction } from 'app/state/actions/config';
import { AuthService, User } from 'app/auth/shared/services/auth.service';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

/*
    <h2>BI Dashboard - {{ user$ | async | json }}</h2>
    <cp-app-nav [sections]="sections"></cp-app-nav>
    <label>
      <input type="checkbox" [(ngModel)]="showPane" />
      Show Configuration Pane
    </label>
    <section class="main">
      <cp-config-pane *ngIf="showPane"></cp-config-pane>
      <router-outlet></router-outlet>
    </section>
    */

@Component({
  selector: 'cp-app',
  template: `
    <div>
      <cp-app-header [user]="user$ | async" (logout)="onLogout()"></cp-app-header>
      <cp-app-nav *ngIf="(user$ | async)?.authenticated" [sections]="sections"></cp-app-nav>
      <label *ngIf="(user$ | async)?.authenticated">
        <input type="checkbox" [(ngModel)]="showPane" />
        Show Configuration Pane
      </label>
      <section class="main">
        <cp-config-pane *ngIf="showPane && (user$ | async)?.authenticated"></cp-config-pane>
        <router-outlet></router-outlet>
      </section>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  sections: any;
  user$: Observable<User>;
  authSubscription: Subscription;
  storeSubscription: Subscription;

  showPane = false;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authSubscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');

    this.store.dispatch(new LoadConfigAction());

    this.storeSubscription = this.store
      .select('configuration')
      .map((data: any) => data.pages.filter(page => page.parent === 'home'))
      .subscribe(sections => (this.sections = sections));
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.storeSubscription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
