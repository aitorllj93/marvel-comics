
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ComicsListComponent
  },
  {
    path: ':id',
    component: ComicsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
