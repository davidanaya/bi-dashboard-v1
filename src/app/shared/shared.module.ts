import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchartComponent } from './components/echart/echart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EchartComponent],
  exports: [EchartComponent]
})
export class SharedModule {}
