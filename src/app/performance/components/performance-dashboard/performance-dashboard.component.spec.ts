import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceDashboardComponent } from './performance-dashboard.component';
import { PerformanceService } from 'app/performance/services/performance.service';

describe('PerformanceDashboardComponent', () => {
  let component: PerformanceDashboardComponent;
  let fixture: ComponentFixture<PerformanceDashboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PerformanceDashboardComponent],
        providers: [PerformanceService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
