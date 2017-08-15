import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { TeamsService } from './services/teams/teams.service';
import { MembersService } from './services/members/members.service';

@NgModule({
  imports: [
      CommonModule,
    RouterModule,
    AngularFireDatabaseModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        TeamsService,
        MembersService
      ]
    };
  }
}
