import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { EchartComponent } from './components/echart/echart.component';

// containers
import {
  PageComponent,
  PageComponents
} from './containers/page/page.component';

// components
import {
  WidgetComponent,
  WidgetComponents
} from './components/widget/widget.component';

// guards
import { AuthGuard } from '../auth/shared/guards/auth.guard';

// routing
import { PageResolve } from './containers/page/page.resolve';

const routes: Routes = [
  {
    path: 'bi',
    children: [
      {
        path: '**',
        component: PageComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PageComponent,
    ...PageComponents,
    EchartComponent,
    WidgetComponent,
    ...WidgetComponents
  ],
  exports: [
    EchartComponent,
    WidgetComponent
  ],
  providers: [PageResolve],
  entryComponents: [...WidgetComponents, ...PageComponents]
})
export class BiModule {}
