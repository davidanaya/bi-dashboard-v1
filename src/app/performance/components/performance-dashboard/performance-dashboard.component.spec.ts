import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';

import { PerformanceDashboardComponent } from './performance-dashboard.component';
import { PerformanceService } from 'app/services/performance.service';

describe('PerformanceDashboardComponent', () => {
  let component: PerformanceDashboardComponent;
  let fixture: ComponentFixture<PerformanceDashboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [StoreModule.provideStore({})],
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
