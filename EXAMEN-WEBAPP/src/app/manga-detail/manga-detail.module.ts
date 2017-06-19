import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MangaDetailComponent } from './manga-detail.component';

const homeRouting = RouterModule.forChild([
  {
    path: 'manga',
    component: MangaDetailComponent
  },
  {
    path: '',
    redirectTo: 'manga',
    pathMatch: 'full'
  }
]);

@NgModule({
  declarations: [MangaDetailComponent],
  imports: [
    CommonModule,
    homeRouting,
    PerfectScrollbarModule
  ],
  providers: []
})
export class MangaDetailModule { }