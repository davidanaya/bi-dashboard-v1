import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';

// components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerformanceComponent } from './performance.component';

// providers
import { PerformanceGuard } from 'app/performance/performance.guard';
import { PerformanceService } from 'app/performance/services/performance.service';

@NgModule({
  imports: [CommonModule, PerformanceRoutingModule],
  declarations: [PerformanceComponent, DashboardComponent],
  providers: [PerformanceGuard, PerformanceService]
})
export class PerformanceModule {}
