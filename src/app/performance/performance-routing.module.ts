import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceComponent } from 'app/performance/performance.component';
import { DashboardComponent } from 'app/performance/components/dashboard/dashboard.component';

import { PerformanceGuard } from 'app/performance/performance.guard';
import { PerformanceResolve } from 'app/performance/performance.resolve';

const routes: Routes = [
  {
    path: 'performance',
    component: PerformanceComponent,
    canActivate: [PerformanceGuard],
    resolve: {
      layout: PerformanceResolve
    },
    children: [{ path: '', component: DashboardComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule {}
