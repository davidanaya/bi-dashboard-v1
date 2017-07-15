import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchartComponent } from './components/echart/echart.component';

import {
  WidgetComponent,
  WidgetComponents
} from './components/widget/widget.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    EchartComponent,
    ...WidgetComponents,
    WidgetComponent
  ],
  exports: [EchartComponent, WidgetComponent],
  entryComponents: [...WidgetComponents]
})
export class WidgetsModule {}
