import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// state
import { INITIAL_STATE } from 'app/state/state';
import { storeReducer } from 'app/state/reducers/store-reducer';

// modules
import { AuthModule } from 'app/auth/auth.module';

// components
import { HomeComponent } from 'app/components/home/home.component';
import { AppComponent } from 'app/app.component';
import { AppHeaderComponent } from 'app/components/app-header/app-header.component';
import { AppNavComponent } from 'app/containers/app-nav/app-nav.component';
import { ConfigPaneComponent } from 'app/containers/config-pane/config-pane.component';

// services
import { LoadConfigEffectService } from 'app/state/effects/load-config-effect.service';
import { UpdateConfigEffectService } from 'app/state/effects/update-config-effect.service';
import { LoadTeamsEffectService } from 'app/state/effects/load-teams-effect.service';
import { ConfigService } from 'app/services/config.service';
import { TeamsService } from 'app/services/teams.service';

// guards
import { AuthGuard } from 'app/auth/shared/guards/auth.guard';

// routing
import { CustomReuseStrategy } from 'app/router.reuse.strategy';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teams',
    loadChildren: './teams/teams.module#TeamsModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  // {
  //   path: 'bi',
  //   loadChildren: './bi/bi.module#BiModule'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    ConfigPaneComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    StoreModule.provideStore(storeReducer),
    EffectsModule.run(LoadConfigEffectService),
    EffectsModule.run(UpdateConfigEffectService),
    EffectsModule.run(LoadTeamsEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AuthModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  providers: [
    ConfigService,
    TeamsService,
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
