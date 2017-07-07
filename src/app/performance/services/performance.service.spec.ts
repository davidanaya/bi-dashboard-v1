import { TestBed, inject } from '@angular/core/testing';

import { PerformanceService } from './performance.service';

describe('PerformanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerformanceService]
    });
  });

  it('should be created', inject([PerformanceService], (service: PerformanceService) => {
    expect(service).toBeTruthy();
  }));

  it('shuld return the default layout', inject([PerformanceService], (service: PerformanceService) => {
    service.getDashboardLayout().subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].name).toEqual('executive-dashboard');
    });
  }));
});
