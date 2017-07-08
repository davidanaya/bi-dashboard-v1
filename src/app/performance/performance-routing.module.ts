import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceDashboardComponent } from './components/performance-dashboard/performance-dashboard.component';

import { PerformanceGuard } from 'app/performance/performance.guard';

const routes: Routes = [
  {
    path: 'performance',
    canActivate: [PerformanceGuard],
    children: [{ path: '', component: PerformanceDashboardComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule {}
