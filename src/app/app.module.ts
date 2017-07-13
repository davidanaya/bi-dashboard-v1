import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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
import { HomeComponent } from 'app/components/home/home.component';
import {
  PageComponent,
  PageComponents
} from './components/page/page.component';

// services
import { FinanceService } from 'app/services/finance.service';
import { LoadFinanceEffectService } from 'app/state-management/effects/load-finance-effect.service';
import { PerformanceService } from 'app/services/performance.service';
import { LoadOpcosEffectService } from 'app/state-management/effects/load-opcos-effect.service';
import { ConfigService } from 'app/services/config.service';
import { SectionComponent } from './components/section/section.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// routing
import { HomeResolve } from 'app/components/home/home.resolve';
import { PageResolve } from 'app/components/page/page.resolve';
import { CustomReuseStrategy } from 'app/router.reuse.strategy';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    ...PageComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    StoreModule.provideStore(storeReducer),
    EffectsModule.run(LoadFinanceEffectService),
    EffectsModule.run(LoadOpcosEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    ConfigService,
    FinanceService,
    PerformanceService,
    HomeResolve,
    PageResolve,
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  entryComponents: [...PageComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
