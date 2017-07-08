import { TestBed, async, inject } from '@angular/core/testing';

import { FinanceGuard } from './finance.guard';

describe('FinanceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinanceGuard]
    });
  });

  it('should ...', inject([FinanceGuard], (guard: FinanceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
