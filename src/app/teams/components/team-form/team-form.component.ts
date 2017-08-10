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
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

import { Team } from 'app/models/team.model';
import { AuthService } from 'app/auth/shared/services/auth.service';
import { TeamsService } from 'app/teams/services/teams.service';

@Component({
  selector: 'cp-team-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="team-form">

      <form [formGroup]="form">

        <div class="team-form__name">
          <label>
            <h3>Team name</h3>
            <input type="text" placeholder="e.g. Discussion Team" formControlName="name">
            <div class="error" *ngIf="required">Team name is required</div>
          </label>
        </div>

        <div class="team-form__members">
          <div class="team-form__subtitle">
            <h3>Members</h3>
            <button type="button" class="team-form__add" (click)="addMember()">
              Add member
            </button>
          </div>
          <div formArrayName="members">
            <label *ngFor="let c of members.controls; index as i">
              <input [formControlName]="i" placeholder="e.g. David Anaya">
                <span class="team-form__remove" (click)="removeMember(i)">X</span>
            </label>
          </div>
        </div>

        <div class="team-form__submit">
          <div>
            <button type="button" class="button" *ngIf="!exists" (click)="createTeam()">Create team</button>
            <button type="button" class="button" *ngIf="exists" (click)="updateTeam()">Save</button>
            <a class="button button--cancel" [routerLink]="['../']">Cancel</a>
          </div>

          <div class="team-form__delete" *ngIf="exists">
            <div *ngIf="toggled">
              <p>Delete item?</p>
              <button class="confirm" type="button" (click)="removeTeam()">Yes</button>
              <button class="cancel" type="button" (click)="toggle()">No</button>
            </div>

            <button class="button button--delete" type="button" (click)="toggle()">Delete</button>
          </div>
        </div>

      </form>

    </div>
  `,
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnChanges {
  toggled = false;
  exists = false;

  @Input() team: Team;
  @Output() create = new EventEmitter<Team>();
  @Output() update = new EventEmitter<Team>();
  @Output() remove = new EventEmitter<Team>();

  form = this.fb.group({
    name: ['', Validators.required],
    members: this.fb.array([this.teamsService.uid])
  });

  constructor(private fb: FormBuilder, private teamsService: TeamsService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.team && this.team.name) {
      this.exists = true;

      const value = this.team;
      this.form.patchValue(value);

      this.emptyMembers();

      if (value.members) {
        for (const item of value.members) {
          this.members.push(new FormControl(item));
        }
      }
    }
  }

  emptyMembers() {
    while (this.members.controls.length) {
      this.members.removeAt(0);
    }
  }

  get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    );
  }

  get members() {
    return this.form.get('members') as FormArray;
  }

  addMember() {
    this.members.push(new FormControl(''));
  }

  removeMember(index: number) {
    this.members.removeAt(index);
  }

  createTeam() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateTeam() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  removeTeam() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
