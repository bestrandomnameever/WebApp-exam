import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MangaCoverComponent } from './manga-cover/manga-cover.component';
import { MangaCoverGridComponent } from './manga-cover-grid/manga-cover-grid.component';

const homeRouting = RouterModule.forChild([
  {
    path: '',
    component: MangaCoverGridComponent
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
        RouterModule
    ],
    providers: []
})
export class HomeModule {}