import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { User } from '../../auth/shared/models/user.model';

@Component({
  selector: 'cp-app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-header">
      <div class="app-header__user-info" *ngIf="user?.authenticated">
        <i class="fa fa-power-off" aria-hidden="true" (click)="logoutUser()"></i>
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
