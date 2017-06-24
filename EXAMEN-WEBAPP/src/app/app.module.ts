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
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';

import { AdminGuardService } from './shared/services/admin-guard.service';
import { ApiService } from './shared/services/api.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { MangaService } from 'app/shared';
import { MetadataService } from './shared/services/metadata.service';
import { JwtService } from './shared/services/jwt.service';
import { MangaCoversDBService } from './shared/services/mangacoverdb.service';
import { MangaUpdatesService } from './shared/services/mangaupdates.service';
import { NoAuthGuardService } from './shared/services/no-auth-guard.service';
import { SearchService } from './shared/services/search.service';
import { UserService } from './shared/services/user.service';

import { DialogsModule } from './shared/dialogs/dialogs.module';
import { SharedModule } from './shared/shared.module';




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
    AdminGuardService,
    ApiService,
    AuthGuardService,
    JwtService,
    MangaCoversDBService,
    MangaService,
    MangaUpdatesService,
    MetadataService,
    NoAuthGuardService,
    SearchService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
