import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'cp-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Home Page</h2>
  `
})
export class HomeComponent implements OnInit {
  ngOnInit() {}
}
