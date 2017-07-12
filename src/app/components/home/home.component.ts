import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .take(1)
      .subscribe(data => (this.sections = data.navigation));
  }
}
