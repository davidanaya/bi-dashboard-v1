import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

import { BarWidgetComponent } from 'app/components/bar-widget/bar-widget.component';
import { DoughnutWidgetComponent } from 'app/components/doughnut-widget/doughnut-widget.component';

export const WidgetComponents = [BarWidgetComponent, DoughnutWidgetComponent];

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
