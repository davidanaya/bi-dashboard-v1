import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { AuthGuard } from 'app/auth/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: './members/members.module#MembersModule'
  },
  {
    path: 'teams',
    canActivate: [AuthGuard],
    loadChildren: './teams/teams.module#TeamsModule'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule.forRoot()]
})
export class AdminModule {}
