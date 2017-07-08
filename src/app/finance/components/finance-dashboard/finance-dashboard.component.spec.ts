import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceDashboardComponent } from './finance-dashboard.component';
import { FinanceService } from 'app/finance/services/finance.service';

describe('FinanceDashboardComponent', () => {
  let component: FinanceDashboardComponent;
  let fixture: ComponentFixture<FinanceDashboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FinanceDashboardComponent],
        providers: [FinanceService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
