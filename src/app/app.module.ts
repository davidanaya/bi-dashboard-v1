import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// modules
import { AppRoutingModule } from './app-routing.module';
import { PerformanceModule } from 'app/performance/performance.module';

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
    AppRoutingModule,
    PerformanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
