import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cp-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>Home Page</h3>
  `
})
export class HomeComponent {}
