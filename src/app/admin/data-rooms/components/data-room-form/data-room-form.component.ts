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

import { AuthService } from 'app/auth/shared/services/auth.service';
import { DataRoom } from 'app/models/data-room.model';
import { DataRoomsService } from 'app/admin/shared/services/data-rooms/data-rooms.service';

@Component({
  selector: 'cp-data-room-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="data-room-form">

      <form [formGroup]="form">

        <div class="data-room-form__name">
          <label>
            <h3>Data room name</h3>
            <input type="text" placeholder="e.g. Finance" formControlName="name">
            <div class="error" *ngIf="required">Data room name is required</div>
          </label>
        </div>

        <div class="data-room-form__members">
          <div class="data-room-form__subtitle">
            <h3>Members</h3>
            <button type="button" class="data-room-form__add" (click)="addMember()">
              Add member
            </button>
          </div>
          <div formArrayName="members">
            <label *ngFor="let c of members.controls; index as i">
              <input [formControlName]="i" placeholder="e.g. David Anaya">
                <span class="data-room-form__remove" (click)="removeMember(i)">X</span>
            </label>
          </div>
        </div>

        <div class="data-room-form__submit">
          <div>
            <button type="button" class="button" *ngIf="!exists" (click)="createDataRoom()">Create data room</button>
            <button type="button" class="button" *ngIf="exists" (click)="updateDataRoom()">Save</button>
            <a class="button button--cancel" [routerLink]="['../']">Cancel</a>
          </div>

          <div class="data-room-form__delete" *ngIf="exists">
            <div *ngIf="toggled">
              <p>Delete item?</p>
              <button class="confirm" type="button" (click)="removeDataRoom()">Yes</button>
              <button class="cancel" type="button" (click)="toggle()">No</button>
            </div>

            <button class="button button--delete" type="button" (click)="toggle()">Delete</button>
          </div>
        </div>

      </form>

    </div>
  `,
  styleUrls: ['./data-room-form.component.scss']
})
export class DataRoomFormComponent implements OnChanges {
  toggled = false;
  exists = false;

  @Input() dataRoom: DataRoom;
  @Output() create = new EventEmitter<DataRoom>();
  @Output() update = new EventEmitter<DataRoom>();
  @Output() remove = new EventEmitter<DataRoom>();

  form = this.fb.group({
    name: ['', Validators.required],
    members: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private dataRoomsService: DataRoomsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.dataRoom && this.dataRoom.name) {
      this.exists = true;

      const value = this.dataRoom;
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

  createDataRoom() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateDataRoom() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  removeDataRoom() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
