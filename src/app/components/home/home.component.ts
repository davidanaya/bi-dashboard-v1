import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-home',
  template: `
    <h2>Home page</h2>
    <p>This is the home page for the Executive Dashboard and should contain links to all sections</p>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
