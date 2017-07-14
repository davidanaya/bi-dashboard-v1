import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';

import 'rxjs/add/operator/map';

import { ConfigService } from 'app/services/config.service';

@Injectable()
export class PageResolve implements Resolve<any> {
  constructor(private service: ConfigService) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.resolveUrlSegment(route.url);
  }

  resolveUrlSegment(urlseg: UrlSegment[]) {
    const url = urlseg.join('/');
    return this.service.getData().map(data => this.buildPage(data.pages, url));
  }

  private buildPage(pages: any[], url: string): any {
    const page = pages.find(p => p.id === url);
    if (this.isSection(page)) {
      page.dashboards = pages.filter(p => p.parent === url);
    }
    return page;
  }

  private isSection(page: any): boolean {
    return page.type === 'section';
  }
}
