import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { PerformanceService } from 'app/performance/services/performance.service';

@Injectable()
export class PerformanceResolve implements Resolve<any> {
  constructor(private performanceService: PerformanceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.performanceService.getDashboardLayout();
  }
}
