import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// state
import { INITIAL_STATE } from 'app/state-management/state';
import { storeReducer } from 'app/state-management/reducers/store-reducer';

// modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'app/shared/shared.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from 'app/containers/home/home.component';
import {
  PageComponent,
  PageComponents
} from './containers/page/page.component';
import {
  WidgetComponent,
  WidgetComponents
} from './containers/widget/widget.component';

// services
import { FinanceService } from 'app/services/finance.service';
import { LoadFinanceEffectService } from 'app/state-management/effects/load-finance-effect.service';
import { PerformanceService } from 'app/services/performance.service';
import { LoadOpcosEffectService } from 'app/state-management/effects/load-opcos-effect.service';
import { ConfigService } from 'app/services/config.service';
import { SectionComponent } from './components/section/section.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadConfigEffectService } from 'app/state-management/effects/load-config-effect.service';

// routing
import { PageResolve } from 'app/containers/page/page.resolve';
import { CustomReuseStrategy } from 'app/router.reuse.strategy';
import { DoughnutWidgetComponent } from './components/doughnut-widget/doughnut-widget.component';
import { BarWidgetComponent } from './components/bar-widget/bar-widget.component';
import { ConfigPaneComponent } from './containers/config-pane/config-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    ...PageComponents,
    ...WidgetComponents,
    DoughnutWidgetComponent,
    BarWidgetComponent,
    WidgetComponent,
    ConfigPaneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    StoreModule.provideStore(storeReducer),
    EffectsModule.run(LoadFinanceEffectService),
    EffectsModule.run(LoadOpcosEffectService),
    EffectsModule.run(LoadConfigEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    ConfigService,
    FinanceService,
    PerformanceService,
    PageResolve,
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  entryComponents: [...PageComponents, ...WidgetComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
