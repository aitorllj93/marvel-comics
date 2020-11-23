import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'comics',
    loadChildren: () => import('./comics/comics.module').then(m => m.ComicsModule)
  },
  {
    path: '**',
    redirectTo: '/comics',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
