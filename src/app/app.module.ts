import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

// modules
import { AppRoutingModule } from './app-routing.module';
import { PerformanceModule } from 'app/performance/performance.module';
import { FinanceModule } from 'app/finance/finance.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from 'app/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    PerformanceModule,
    FinanceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
