import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { ConfigLoadedAction } from 'app/state/actions/config';

@Component({
  selector: 'cp-config-pane',
  template: `
    <div class="pane">
      <h3>App Configuration</h3>
      <form [formGroup]="form" (ngSubmit)="onSubmit()" *ngIf="data">
        <textarea type="text" formControlName="config" cols="50" rows="60"></textarea>
        <div class="form__buttons">
          <button type="submit" [disabled]="form.invalid">Update</button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./config-pane.component.scss']
})
export class ConfigPaneComponent implements OnInit {
  data: any;

  form = this.fb.group({
    config: this.fb.control({})
  });

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.store.select('configuration').subscribe(config => {
      this.data = config;
      this.form.get('config').setValue(JSON.stringify(this.data, undefined, 2));
    });
  }

  onSubmit() {
    const config = JSON.parse(this.form.get('config').value);
    this.store.dispatch(new ConfigLoadedAction(config));
  }
}
