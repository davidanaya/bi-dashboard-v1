import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';

import 'rxjs/add/operator/map';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';

import { LoadConfigAction } from 'app/state/actions/config';

@Injectable()
export class PageResolve implements Resolve<any> {
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.resolveUrlSegment(route.url);
  }

  resolveUrlSegment(urlseg: UrlSegment[]) {
    const url = urlseg.join('/');
    return this.store
      .select('config')
      .take(1)
      .map((data: any) => this.buildPage(data.pages, url));
  }

  private buildPage(pages: any[] = [], url: string): any {
    const page = pages.find(p => p.id === url);
    const newPage = Object.assign({}, page);
    if (this.isSection(page)) {
      newPage.dashboards = pages.filter(p => p.parent === url);
    }
    return newPage;
  }

  private isSection(page: any): boolean {
    return page && page.type === 'section';
  }
}
