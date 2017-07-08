import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';

import { FinanceGuard } from './finance.guard';

const routes: Routes = [
  {
    path: 'finance',
    canActivate: [FinanceGuard],
    children: [{ path: '', component: FinanceDashboardComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule {}
