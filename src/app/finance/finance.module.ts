import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';

// components
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';

// providers
import { FinanceGuard } from 'app/finance/finance.guard';
import { FinanceService } from 'app/finance/services/finance.service';

@NgModule({
  imports: [CommonModule, FinanceRoutingModule],
  declarations: [FinanceDashboardComponent],
  providers: [FinanceGuard, FinanceService]
})
export class FinanceModule {}
