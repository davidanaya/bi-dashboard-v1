import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { TeamsService } from './services/teams/teams.service';
import { MembersService } from './services/members/members.service';
import { DataRoomsService } from './services/data-rooms/data-rooms.service';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  declarations: [ListItemComponent],
  exports: [ListItemComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [TeamsService, MembersService, DataRoomsService]
    };
  }
}
