import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CommonModule,
    MdInputModule,
    BrowserAnimationsModule
  ],
  declarations: [AddMangaComponent]
})
export class AddMangaModule { }
