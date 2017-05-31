import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddMangaComponent } from './add-manga.component';

const addMangaRouting = RouterModule.forChild([
  {
    path: "add",
    component: AddMangaComponent
  }
])

@NgModule({
  imports: [
    addMangaRouting,
    CommonModule
  ],
  declarations: [AddMangaComponent]
})
export class AddMangaModule { }
