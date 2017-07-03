import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { AdminGuardService } from './../shared/services/admin-guard.service';

import { MangaResolver } from './../manga-detail/manga-resolver.service';

const addMangaRouting = RouterModule.forChild([
  {
    path: "edit",
    canActivate: [AdminGuardService],
    children: [
      {
        path: "",
        redirectTo: "add",
        pathMatch: "full"
      },
      {
        path: "add",
        component: AddMangaComponent,
        data: {type: "add"}
      },
      {
        path: ":slug",
        component: AddMangaComponent,
        data: { type: "edit"},
        resolve: {
          editableManga: MangaResolver
        }
      }
    ]
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
    ReactiveFormsModule,
    TagInputModule
  ],
  declarations: [
    AddMangaComponent
  ],
  providers: [
    MangaResolver
  ]
})
export class AddMangaModule { }
