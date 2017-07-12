import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'cp-app',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
