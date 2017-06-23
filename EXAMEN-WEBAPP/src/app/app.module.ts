import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { AddMangaModule } from './add-manga/add-manga.module';
import { HomeModule } from './home/home.module';
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
import { UserService } from './shared/services/user.service';


const rootRouting = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    AddMangaModule,
    AuthModule,
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
    SearchService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
