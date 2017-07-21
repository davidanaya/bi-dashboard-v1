import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from './shared/shared.module';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
      }
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyBmPDrXCkbckiJQWTnhLqDKUhF41OwDiUM',
  authDomain: 'bi-dashboard-v1.firebaseapp.com',
  databaseURL: 'https://bi-dashboard-v1.firebaseio.com',
  projectId: 'bi-dashboard-v1',
  storageBucket: 'bi-dashboard-v1.appspot.com',
  messagingSenderId: '67209629664'
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot(),
  ]
})
export class AuthModule {}
