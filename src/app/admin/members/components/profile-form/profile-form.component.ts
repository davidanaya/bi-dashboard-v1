import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

import { AuthService } from 'app/auth/shared/services/auth.service';
import { Member } from 'app/models/member.model';
import { MembersService } from 'app/admin/shared/services/members/members.service';

@Component({
  selector: 'cp-profile-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="profile-form">

      <form [formGroup]="form">

        <div class="profile-form__name">
          <label>
            <h3>Name</h3>
            <input type="text" placeholder="Your name" formControlName="name">
            <div class="error" *ngIf="required">Name is required</div>
          </label>
        </div>

        <div class="profile-form__submit">
          <div>
            <button type="button" class="button" (click)="updateProfile()">Save</button>
            <a class="button button--cancel" [routerLink]="['../']">Cancel</a>
          </div>
        </div>

      </form>

    </div>
  `,
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnChanges {
  @Input() profile: Member;
  @Output() update = new EventEmitter<Member>();

  form = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private teamsService: MembersService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.profile && this.profile.name) {
      const value = this.profile;
      this.form.patchValue(value);
    }
  }

  get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    );
  }

  updateProfile() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }
}
