import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ConfigService } from 'app/shared/services/config.service';

@NgModule({
  imports: [CommonModule, AngularFireDatabaseModule],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ConfigService]
    };
  }
}
