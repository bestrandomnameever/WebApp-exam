import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MangaDetailComponent } from './manga-detail.component';

import { MangaResolver } from './manga-resolver.service';

import { SharedModule } from './../shared/shared.module';

const homeRouting = RouterModule.forChild([
  {
    path: 'manga/:slug',
    component: MangaDetailComponent,
    resolve: {
      manga: MangaResolver
    }
  }/*,
  {
    path: '',
    redirectTo: 'manga',
    pathMatch: 'full'
  }*/
]);

@NgModule({
  declarations: [MangaDetailComponent],
  imports: [
    CommonModule,
    homeRouting,
    PerfectScrollbarModule,
    SharedModule
  ],
  providers: [
    MangaResolver
  ]
})
export class MangaDetailModule { }