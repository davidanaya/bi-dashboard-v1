import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FinanceGuard implements CanActivate {
  canActivate(): boolean {
    return true;
  }
}
