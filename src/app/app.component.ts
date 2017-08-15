import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { AuthService } from 'app/auth/shared/services/auth.service';
import { User } from 'app/auth/shared/models/user.model';

@Component({
  selector: 'cp-app',
  template: `
    <div>
      <cp-app-header [user]="user$ | async" (logout)="onLogout()"></cp-app-header>

      <ng-container *ngIf="(user$ | async)?.authenticated; else not_authenticated">
        <cp-app-nav></cp-app-nav>
        <!--
        <label>
          <input type="checkbox" [(ngModel)]="showPane" />
          Show Configuration Pane
        </label>
        -->
        <section class="main">
          <!-- <cp-config-pane *ngIf="showPane"></cp-config-pane> -->
          <router-outlet></router-outlet>
        </section>
      </ng-container>

      <ng-template #not_authenticated>
        <router-outlet></router-outlet>
      </ng-template>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  subscription: Subscription;
  configSubscription: Subscription;

  showPane = false;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
