import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';

// components
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';

// providers
import { FinanceGuard } from 'app/finance/finance.guard';

@NgModule({
  imports: [CommonModule, FinanceRoutingModule],
  declarations: [FinanceDashboardComponent],
  providers: [FinanceGuard]
})
export class FinanceModule {}
