import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EchartComponent } from './components/echart/echart.component';

// containers
import {
  PageComponent,
  PageComponents
} from './containers/page/page.component';
import { ConfigPaneComponent } from './containers/config-pane/config-pane.component';

// components
import { AppNavComponent } from './containers/app-nav/app-nav.component';
import {
  WidgetComponent,
  WidgetComponents
} from './components/widget/widget.component';

// services
import { ConfigService } from './services/config.service';

// guards
import { AuthGuard } from '../auth/shared/guards/auth.guard';

// routing
import { PageResolve } from './containers/page/page.resolve';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    canActivate: [AuthGuard],
    resolve: {
      content: PageResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PageComponent,
    ...PageComponents,
    ConfigPaneComponent,
    AppNavComponent,
    EchartComponent,
    WidgetComponent,
    ...WidgetComponents
  ],
  exports: [
    EchartComponent,
    WidgetComponent,
    AppNavComponent,
    ConfigPaneComponent
  ],
  providers: [PageResolve, ConfigService],
  entryComponents: [...WidgetComponents, ...PageComponents]
})
export class BiModule {}
