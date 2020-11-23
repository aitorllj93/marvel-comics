import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsState } from './state/comics.state';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ComicsRoutingModule,
    NgxsModule.forFeature([ComicsState])
  ],
  declarations: [
    ComicsListComponent,
    ComicsDetailComponent,
  ]
})
export class ComicsModule { }
