import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthGuard } from 'app/auth/shared/guards/auth.guard';

import { TeamsComponent } from 'app/teams/containers/teams/teams.component';
import { TeamComponent } from 'app/teams/containers/team/team.component';
import { TeamFormComponent } from 'app/teams/components/team-form/team-form.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TeamsService } from 'app/teams/services/teams.service';
import { JoinPipe } from './pipes/join.pipe';

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
    RouterModule.forChild(routes)
  ],
  declarations: [
    TeamsComponent,
    TeamComponent,
    TeamFormComponent,
    ListItemComponent,
    JoinPipe
  ],
  providers: [
    TeamsService
  ],
})
export class TeamsModule {}
