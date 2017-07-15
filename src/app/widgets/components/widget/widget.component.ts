import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

import { BarWidgetComponent } from 'app/widgets/components/bar-widget/bar-widget.component';
import { DoughnutWidgetComponent } from 'app/widgets/components/doughnut-widget/doughnut-widget.component';
import { TilesWidgetComponent } from 'app/widgets/components/tiles-widget/tiles-widget.component';
import { TableWidgetComponent } from 'app/widgets/components/table-widget/table-widget.component';

export const WidgetComponents = [BarWidgetComponent, DoughnutWidgetComponent, TilesWidgetComponent, TableWidgetComponent];

@Component({
  selector: 'cp-widget',
  template: ' ',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() type: string;

  constructor(
    private viewContainer: ViewContainerRef,
    private cfResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const ComponentClass: any = WidgetComponents.find(
      component => component.ref === this.type
    );
    const widgetComponentFactory = this.cfResolver.resolveComponentFactory(
      ComponentClass
    );
    const widgetComponent = this.viewContainer.createComponent(
      widgetComponentFactory
    );
  }
}
