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
import { Config, Page } from 'app/models/config.model';

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
      .map((data: Config) => this.buildPage(data.pages, url));
  }

  private buildPage(pages: Page[] = [], url: string): Page {
    const page = pages.find(p => p.id === url);
    const newPage = Object.assign({}, page);
    if (this.isSection(page)) {
      newPage.dashboards = pages.filter(p => p.parent === url);
    }
    return newPage;
  }

  private isSection(page: Page): boolean {
    return page && page.type === 'section';
  }
}
