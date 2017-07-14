import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/containers/home/home.component';
import { PageComponent } from 'app/containers/page/page.component';
import { PageResolve } from 'app/containers/page/page.resolve';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageComponent,
    resolve: {
      content: PageResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
