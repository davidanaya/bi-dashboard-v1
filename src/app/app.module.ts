import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// state
import { INITIAL_STATE } from 'app/state-management/state';
import { storeReducer } from 'app/state-management/reducers';

// modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { PerformanceModule } from 'app/performance/performance.module';
import { FinanceModule } from 'app/finance/finance.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from 'app/components/home/home.component';

// services
import { FinanceService } from 'app/services/finance.service';
import { LoadFinanceEffectService } from 'app/state-management/effects/load-finance-effect.service';
import { PerformanceService } from 'app/services/performance.service';
import { LoadOpcosEffectService } from 'app/state-management/effects/load-opcos-effect.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    StoreModule.provideStore(storeReducer),
    EffectsModule.run(LoadFinanceEffectService),
    EffectsModule.run(LoadOpcosEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AppRoutingModule,
    SharedModule,
    PerformanceModule,
    FinanceModule
  ],
  providers: [FinanceService, PerformanceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
