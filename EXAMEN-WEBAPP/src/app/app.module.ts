import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AddMangaModule } from './add-manga/add-manga.module';
import { MangaDetailModule } from './manga-detail/manga-detail.module';

import { AppComponent } from './app.component';
import {
  ApiService,
  DialogsModule,
  MainNavComponent,
  MangaService,
  MangaUpdatesService,
  MetadataService,
  SharedModule,
} from './shared';
import { MangaCoversDBService } from './shared/services/mangacoverdb.service';
import { SearchService } from './shared/services/search.service';


const rootRouting = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    AddMangaModule,
    BrowserModule,
    DialogsModule,
    FormsModule,
    HomeModule,
    MangaDetailModule,
    HttpModule,
    RouterModule,
    SharedModule,
    rootRouting
  ],
  providers: [
    ApiService,
    MangaCoversDBService,
    MangaService,
    MangaUpdatesService,
    MetadataService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
