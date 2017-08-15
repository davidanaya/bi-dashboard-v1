import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthGuard } from 'app/auth/shared/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { DataRoomsComponent } from './containers/data-rooms/data-rooms.component';
import { DataRoomComponent } from './containers/data-room/data-room.component';
import { DataRoomFormComponent } from 'app/admin/data-rooms/components/data-room-form/data-room-form.component';

const routes: Routes = [
  {
    path: '',
    component: DataRoomsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    component: DataRoomComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: DataRoomComponent,
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
  declarations: [DataRoomsComponent, DataRoomComponent, DataRoomFormComponent]
})
export class DataRoomsModule {}
