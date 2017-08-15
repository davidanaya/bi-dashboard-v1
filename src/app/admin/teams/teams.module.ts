import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthGuard } from 'app/auth/shared/guards/auth.guard';

import { TeamsComponent } from './containers/teams/teams.component';
import { TeamComponent } from './containers/team/team.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    component: TeamComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: TeamComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    TeamsComponent,
    TeamComponent,
    TeamFormComponent,
    ListItemComponent
  ]
})
export class TeamsModule {}
