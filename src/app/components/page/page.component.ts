import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { PageResolve } from 'app/components/page/page.resolve';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { SectionComponent } from 'app/components/section/section.component';

export const PageComponents = [SectionComponent, DashboardComponent];

@Component({
  selector: 'cp-page',
  template: ' ',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pageResolve: PageResolve,
    private viewContainer: ViewContainerRef,
    private cfResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.route.url
      .switchMap(urlSegment => this.pageResolve.resolveUrlSegment(urlSegment))
      .subscribe(content => {
        const ComponentClass: any = PageComponents.find(
          component => component.ref === content.type
        );
        const pageComponentFactory = this.cfResolver.resolveComponentFactory(
          ComponentClass
        );
        const pageComponent = this.viewContainer.createComponent(
          pageComponentFactory
        );
        pageComponent.instance['data'] = content;
      });
  }
}
