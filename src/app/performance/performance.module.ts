import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';

// components
import { PerformanceDashboardComponent } from './components/performance-dashboard/performance-dashboard.component';

// providers
import { PerformanceGuard } from './performance.guard';

@NgModule({
  imports: [CommonModule, PerformanceRoutingModule],
  declarations: [PerformanceDashboardComponent],
  providers: [PerformanceGuard]
})
export class PerformanceModule {}
