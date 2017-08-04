import { Component, OnInit } from '@angular/core';

const DATA = {
  yearMonth: 201703,
  metrics: [
    'Actual Wells',
    'Actual Wells',
    'Wells Estimated Cost',
    'Wells Planned Budget'
  ],
  totals: {
    name: 'Total Upstream',
    values: {
      'Actual Wells': 41,
      'Planned Wells': 50,
      'Wells Estimated Cost': 204,
      'Wells Planned Budget': 252
    }
  },
  details: [
    {
      name: 'Company1',
      values: {
        'Actual Wells': 34,
        'Planned Wells': 39,
        'Wells Estimated Cost': 96463,
        'Wells Planned Budget': 116405
      }
    },
    {
      name: 'Company2',
      values: {
        'Actual Wells': 5,
        'Planned Wells': 7,
        'Wells Estimated Cost': 76876,
        'Wells Planned Budget': 94831
      }
    },
    {
      name: 'Company3',
      values: {
        'Actual Wells': 2,
        'Planned Wells': 4,
        'Wells Estimated Cost': 31175,
        'Wells Planned Budget': 40880
      }
    }
  ]
};

@Component({
  selector: 'cp-table-widget',
  template: `
    <h3>table-widget</h3>
    <div class="table__container" style="width: 500px; height: 200px;">
      <table>
        <thead>
          <tr>
            <th></th>
            <th *ngFor="let metric of data.metrics">{{ metric }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of data.details">
            <td (click)="onClick(item.name)">{{ item.name }}</td>
            <td (click)="onClick(item, i)" *ngFor="let metric of data.metrics; let i = index;">{{ item.values[metric] }}</td>
          </tr>
          <tr>
            <td (click)="onClick(data.totals.name)">{{ data.totals.name }}</td>
            <td (click)="onClick(data.totals, i)" *ngFor="let metric of data.metrics; let i = index;">{{ data.totals.values[metric] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./table-widget.component.scss']
})
export class TableWidgetComponent implements OnInit {
  static ref = 'table';

  data = DATA;

  constructor() {}

  ngOnInit() {}

  onClick(item: any, index?: number) {
    console.log('table cell clicked', item, index);
  }
}
