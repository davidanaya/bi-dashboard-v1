import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'cp-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>Home Page</h3>
  `
})
export class HomeComponent implements OnInit {
  ngOnInit() {}
}
