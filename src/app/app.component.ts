import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <nav>
      <ul>
        <li><a href="" [routerLink]="['/home']">Home</a></li>
        <li><a href="" [routerLink]="['/performance']">Performance</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-cli-seed';
}
