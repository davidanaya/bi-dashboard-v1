import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceComponent } from 'app/performance/performance.component';
import { DashboardComponent } from 'app/performance/components/dashboard/dashboard.component';

import { PerformanceGuard } from 'app/performance/performance.guard';

const routes: Routes = [
  {
    path: 'performance',
    component: PerformanceComponent,
    canActivate: [PerformanceGuard],
    children: [{ path: '', component: DashboardComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule {}
