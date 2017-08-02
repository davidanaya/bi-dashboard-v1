import { Component, OnInit } from '@angular/core';

const DATA = [
  {
    title: 50,
    subtitle: 'Planned Wells',
    icon: 'fa-paper-plane',
    bgColor: 'bg-lime',
    order: 1
  },
  {
    title: 41,
    subtitle: 'Actual Wells',
    icon: 'fa-map',
    bgColor: 'bg-dark-blue',
    order: 2
  },
  {
    title: 252,
    subtitle: 'Actual Wells',
    icon: 'fa-bar-chart',
    bgColor: 'bg-purple',
    order: 3
  },
  {
    title: 204,
    subtitle: 'Wells Estimated Cost',
    icon: 'fa-calculator',
    bgColor: 'bg-orange',
    order: 4
  }
];

@Component({
  selector: 'cp-tiles-widget',
  template: `
    <h3>tiles-widget</h3>
    <div class="tiles" style="width: 500px; height: 200px;">
      <div *ngFor="let tile of tiles" class="tiles__item {{ tile.bgColor }}" style="width: 250px; height: 100px;" (click)="onClick(tile)">
        <div class="tiles__content">
          <div class="tiles__icon fa {{ tile.icon }}"></div>
          <div class="tiles__title">
            <span>{{ tile.title }}</span>
          </div>
          <div class="tiles__subtitle">{{ tile.subtitle }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./tiles-widget.component.scss']
})
export class TilesWidgetComponent implements OnInit {
  static ref = 'tiles';

  tiles = DATA;

  constructor() {}

  ngOnInit() {}

  onClick(tile) {
    console.log('tiles clicked', tile);
  }
}
