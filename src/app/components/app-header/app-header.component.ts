import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { User } from '../../auth/shared/services/auth.service';

@Component({
  selector: 'cp-app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-header">
      <div class="app-header__user-info" *ngIf="user?.authenticated">
        <span (click)="logoutUser()">Logout</span>
      </div>
    </div>
  `,
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @Input() user: User;
  @Output() logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }
}
