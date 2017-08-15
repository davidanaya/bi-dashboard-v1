import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Member } from 'app/models/member.model';
import { MembersService } from 'app/admin/shared/services/members/members.service';

@Component({
  selector: 'cp-member',
  template: `
    <div class="profile">
      <div class="profile__title">
        <h2>Your Profile</h2>
      </div>
      <div *ngIf="profile$ | async as profile; else loading">
        <cp-profile-form
          [profile]="profile"
          (update)="updateProfile($event)">
        </cp-profile-form>
      </div>
      <ng-template #loading>
        <div class="message">
          Fetching profile...
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit, OnDestroy {
  profile$: Observable<Member>;
  subscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private membersService: MembersService
  ) {}

  ngOnInit() {
    this.subscription = this.membersService.profile$.subscribe();
    this.profile$ = this.store.select<Member>('profile');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async updateProfile(event: Member) {
    try {
      await this.membersService.updateMember(
        event.$key || this.membersService.uid,
        event
      );
    } catch (e) {
      console.error('updateTeam', e);
    }
  }
}
