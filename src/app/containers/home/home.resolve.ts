import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ConfigService } from 'app/services/config.service';

@Injectable()
export class HomeResolve implements Resolve<any> {
  constructor(private service: ConfigService) {}

  resolve() {
    return this.service
      .getData()
      .map(data => data.pages.filter(page => page.parent === 'home'));
  }
}
