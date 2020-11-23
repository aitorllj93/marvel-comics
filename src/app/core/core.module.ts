import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';

import { APIKeyInterceptor } from './interceptors/apiKey.interceptor';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIKeyInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
