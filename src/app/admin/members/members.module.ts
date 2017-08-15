import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthGuard } from 'app/auth/shared/guards/auth.guard';
import { MemberComponent } from './containers/member/member.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileFormComponent } from 'app/admin/members/components/profile-form/profile-form.component';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
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
    MemberComponent,
    ProfileFormComponent
  ]
})
export class MembersModule { }
