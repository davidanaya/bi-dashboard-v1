import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/auth/shared/guards/auth.guard';
import { TeamsComponent } from 'app/teams/containers/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [TeamsComponent]
})
export class TeamsModule {}
