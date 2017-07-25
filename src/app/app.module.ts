import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// state
import { INITIAL_STATE } from 'app/state/state';
import { storeReducer } from 'app/state/reducers/store-reducer';

// modules
import { SharedModule } from 'app/shared/shared.module';
import { WidgetsModule } from 'app/widgets/widgets.module';
import { AuthModule } from 'app/auth/auth.module';

// containers
import {
  PageComponent,
  PageComponents
} from './containers/page/page.component';
import { ConfigPaneComponent } from './containers/config-pane/config-pane.component';

// components
import { HomeComponent } from 'app/components/home/home.component';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './containers/app-nav/app-nav.component';

// services
import { SectionComponent } from './components/section/section.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadConfigEffectService } from 'app/state/effects/load-config-effect.service';

// guards
import { AuthGuard } from 'app/auth/shared/guards/auth.guard';

// routing
import { PageResolve } from 'app/containers/page/page.resolve';
import { CustomReuseStrategy } from 'app/router.reuse.strategy';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageComponent,
    canActivate: [AuthGuard],
    resolve: {
      content: PageResolve
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    ...PageComponents,
    ConfigPaneComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    StoreModule.provideStore(storeReducer),
    EffectsModule.run(LoadConfigEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AuthModule,
    RouterModule.forRoot(routes),
    SharedModule.forRoot(),
    WidgetsModule
  ],
  providers: [
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
