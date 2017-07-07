import { TestBed, async, inject } from '@angular/core/testing';

import { PerformanceGuard } from './performance.guard';

describe('PerformanceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerformanceGuard]
    });
  });

  it('should ...', inject([PerformanceGuard], (guard: PerformanceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
