import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { PageResolve } from './page.resolve';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SectionComponent } from '../../components/section/section.component';

import { Store } from '@ngrx/store';
import { AppState } from 'app/state/state';
import { Page } from 'app/models/config.model';

export const PageComponents = [SectionComponent, DashboardComponent];

@Component({
  selector: 'cp-page',
  template: ' ',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  urlSegment: UrlSegment[];

  constructor(
    private route: ActivatedRoute,
    private pageResolve: PageResolve,
    private viewContainer: ViewContainerRef,
    private cfResolver: ComponentFactoryResolver,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.subscribeToRouteChanges();
  }

  private subscribeToRouteChanges() {
    this.route.url
      .switchMap(urlSegment => {
        this.urlSegment = urlSegment;
        return this.pageResolve.resolveUrlSegment(urlSegment);
      })
      .subscribe(content => {
        if (content) {
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
          this.subscribeToConfigurationChanges(pageComponent, content);
        }
      });
  }

  private subscribeToConfigurationChanges(
    pageComponent: ComponentRef<{}>,
    content: Page
  ) {
    const url = content.link;
    this.store
      .select('config')
      .switchMap(() => this.pageResolve.resolveUrlSegment(this.urlSegment))
      .subscribe(newContent => (pageComponent.instance['data'] = newContent));
  }
}
