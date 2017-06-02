import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdInputModule,
  MdSelectModule,
  MdCheckboxModule
} from '@angular/material';
import { TagInputModule } from 'ng2-tag-input';

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
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MdAutocompleteModule,
    MdCheckboxModule,
    MdInputModule,
    MdSelectModule,
    TagInputModule
  ],
  declarations: [
    AddMangaComponent
  ]
})
export class AddMangaModule {}
