import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// state
import { INITIAL_STATE } from 'app/state/state';
import { storeReducer } from 'app/state/reducers/store-reducer';

// modules
import { BiModule } from 'app/bi/bi.module';
import { AuthModule } from 'app/auth/auth.module';

// components
import { HomeComponent } from 'app/components/home/home.component';
import { AppComponent } from 'app/app.component';
import { AppHeaderComponent } from 'app/components/app-header/app-header.component';

// services
import { LoadConfigEffectService } from 'app/state/effects/load-config-effect.service';

// guards
import { AuthGuard } from 'app/auth/shared/guards/auth.guard';

// routing
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
  // {
  //   path: '**',
  //   loadChildren: './bi/bi.module#BiModule'
  // }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    StoreModule.provideStore(storeReducer),
    EffectsModule.run(LoadConfigEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AuthModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    BiModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
