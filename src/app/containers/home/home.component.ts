import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state-management/state';
import { LoadConfigAction } from 'app/state-management/actions/config';

@Component({
  selector: 'cp-home',
  template: `
    <h3>Home Page</h3>
    <nav class="navigation">
      <a *ngFor="let item of sections" [routerLink]="item.link">&nbsp;{{ item.title }}&nbsp;</a>
    </nav>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sections: any;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select('configuration')
      .map((data: any) => data.pages.filter(page => page.parent === 'home'))
      .subscribe(sections => (this.sections = sections));
  }
}
