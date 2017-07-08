import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <nav class="navigation">
      <a *ngFor="let item of nav"
        [routerLink]="item.link"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: item.exact }">
        &nbsp;{{ item.name}}&nbsp;
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Executive Dashboard';
  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: false
    },
    {
      link: '/performance',
      name: 'Performance',
      exact: false
    },
    {
      link: '/finance',
      name: 'Finance',
      exact: false
    }
  ];
}
