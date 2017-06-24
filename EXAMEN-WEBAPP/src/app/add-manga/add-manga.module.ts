import { AuthGuardService } from './../shared/services/auth-guard.service';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdInputModule,
  MdSelectModule,
  MdCheckboxModule
} from '@angular/material';
import { TagInputModule } from 'ng2-tag-input';

import { AddMangaComponent } from './add-manga.component';

import { MangaResolver } from './../manga-detail/manga-resolver.service';

const addMangaRouting = RouterModule.forChild([
  {
    path: "add",
    component: AddMangaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "edit/:slug",
    component: AddMangaComponent,
    resolve: {
      editableManga: MangaResolver
    }
  }
]);


@NgModule({
  imports: [
    addMangaRouting,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSelectModule,
    TagInputModule
  ],
  declarations: [
    AddMangaComponent
  ],
  providers: [
    MangaResolver
  ]
})
export class AddMangaModule {}
