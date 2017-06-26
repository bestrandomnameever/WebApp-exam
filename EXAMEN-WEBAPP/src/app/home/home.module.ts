import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MangaCoverComponent } from './manga-cover/manga-cover.component';
import { MangaCoverGridComponent } from './manga-cover-grid/manga-cover-grid.component';

import { MangaService } from 'app/shared';

import { MdProgressSpinnerModule } from '@angular/material';
import { SharedModule } from './../shared/shared.module';

const homeRouting = RouterModule.forChild([
  {
    path: 'home',
    component: MangaCoverGridComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]);

@NgModule({
    declarations: [
        MangaCoverComponent,
        MangaCoverGridComponent
    ],
    imports: [ 
        homeRouting,
        CommonModule,
        MdProgressSpinnerModule,
        PerfectScrollbarModule,
        RouterModule,
        SharedModule
    ],
    providers: [
        MangaService
    ]
})
export class HomeModule {}